(function(){
    'use strict';
     angular.module('KKB').controller('Master.LineController', lineController);

    function lineController(MasterService, $scope, DTOptionsBuilder){

        var vm=this, btnObj=[{method:'save', title:'Save'}, {method:'update', title:'Update'}];
        loaDefault();

        function loaDefault(){
            $scope.line = {};
            $scope.lines = [];
            $scope.buttons = btnObj[0];
            $scope.dtOptions = DTOptionsBuilder.newOptions()
                .withDOM('<"html5buttons"B>lTfgitp')
                .withButtons([
                    {extend:'copy'},
                    {extend:'csv'},
                    {extend:'excel', title:'Line'},
                    {extend:'pdf', title:'Line'},
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
        }

        $scope.save = function(){
            if($scope.line.name && $scope.line.code){
                MasterService.saveLine($scope.line).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('Enter Line Code and Line Name');
            }
        }

        $scope.update = function(){
            if($scope.line.name && $scope.line.code){
                MasterService.updateLine($scope.line).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('Enter Line Code and Line Name');
            }
        }

        $scope.editLine = function(obj){
            $scope.line = angular.copy(obj);
            $scope.buttons = btnObj[1]
        }

        $scope.deleteLine = function(id){
            MasterService.deleteLine({_id:id}).then(function(res){
                if(res.data){
                    initController();
                }
            });
        }

        $scope.cancel = function(){
            $scope.line = {};
            $scope.buttons = btnObj[0];
        }
    }
}());