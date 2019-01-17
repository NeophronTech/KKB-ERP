(function(){
    'use strict';
     angular.module('KKB').controller('Master.StateController', stateController);

    function stateController(MasterService, $scope, DTOptionsBuilder){

        var vm=this, btnObj=[{method:'save', title:'Save'}, {method:'update', title:'Update'}];
        loaDefault();

        function loaDefault(){
            $scope.state = {};
            $scope.states = [];
            $scope.buttons = btnObj[0];
            $scope.dtOptions = DTOptionsBuilder.newOptions()
                .withDOM('<"html5buttons"B>lTfgitp')
                .withButtons([
                    {extend:'copy'},
                    {extend:'csv'},
                    {extend:'excel', title:'State'},
                    {extend:'pdf', title:'State'},
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
            MasterService.readState({active:true}).then(function(res){
                if(res.data){
                    $scope.states = res.data;
                }
            });
        }

        $scope.save = function(){
            if($scope.state.name && $scope.state.code){
                MasterService.saveState($scope.state).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('Enter State Code and State Name');
            }
        }

        $scope.update = function(){
            if($scope.state.name && $scope.state.code){
                MasterService.updateState($scope.state).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('Enter State Code and State Name');
            }
        }

        $scope.editState = function(obj){
            $scope.state = angular.copy(obj);
            $scope.buttons = btnObj[1]
        }

        $scope.deleteState = function(id){
            MasterService.deleteState({_id:id}).then(function(res){
                if(res.data){
                    initController();
                }
            });
        }

        $scope.cancel = function(){
            $scope.state = {};
            $scope.buttons = btnObj[0];
        }
    }
}());