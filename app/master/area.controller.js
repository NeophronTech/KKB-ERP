(function(){
    'use strict';
    angular.module('KKB').controller('Master.AreaController', areaController);

    function areaController(MasterService, $scope, DTOptionsBuilder){

        var vm=this, btnObj=[{method:'save', title:'Save'}, {method:'update', title:'Update'}];
        loaDefault();

        function loaDefault(){
            $scope.area = {};
            $scope.areas = [];
            $scope.lines = [];
            $scope.buttons = btnObj[0];
            $scope.dtOptions = DTOptionsBuilder.newOptions()
                .withDOM('<"html5buttons"B>lTfgitp')
                .withButtons([
                    {extend:'copy'},
                    {extend:'csv'},
                    {extend:'excel', title:'Area'},
                    {extend:'pdf', title:'Area'},
                    {extend:'print',
                        customize: function(win){
                            $(win.document.body).addClass('white-bg');
                            $(win.document.body).css('font-size', '10px');
    
                            $(win.document.body).find('table')
                                .addClass('compact')
                                .css('font-size', 'inherit');
                        }
                    }
                ]);
            initController();
        }

        function initController(){
            MasterService.readLine({active:true}).then(function(res){
                if(res.data){
                    $scope.lines = res.data;
                }
            });

            MasterService.readArea({active:true}).then(function(res){
                if(res.data){
                    $scope.areas = res.data;
                }
            });
        }

        $scope.save = function(){
            if($scope.area.name && $scope.area.code && $scope.area.line){
                MasterService.saveArea($scope.area).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('Enter Area Code and Area Name');
            }
        }

        $scope.update = function(){
            if($scope.area.name && $scope.area.code && $scope.area.line){
                MasterService.updateArea($scope.area).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('Enter Area Code and Area Name');
            }
        }

        $scope.editArea = function(obj){
            $scope.area = angular.copy(obj);
            $scope.area.line = $scope.area.line._id;
            $scope.buttons = btnObj[1]
        }

        $scope.deleteArea = function(id){
            MasterService.deleteArea({_id:id}).then(function(res){
                if(res.data){
                    initController();
                }
            });
        }

        $scope.cancel = function(){
            $scope.area = {};
            $scope.buttons = btnObj[0];
        }
    }
}());