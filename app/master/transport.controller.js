(function(){
    'use strict';
    angular.module('KKB').controller('Master.TransportController', transportController);

    function transportController(MasterService, $scope, DTOptionsBuilder){

        var vm=this, btnObj=[{method:'save', title:'Save'}, {method:'update', title:'Update'}];
        loaDefault();

        function loaDefault(){
            $scope.transport = {};
            $scope.transports = [];
            $scope.buttons = btnObj[0];
            $scope.dtOptions = DTOptionsBuilder.newOptions()
                .withDOM('<"html5buttons"B>lTfgitp')
                .withButtons([
                    {extend:'copy'},
                    {extend:'csv'},
                    {extend:'excel', title:'Transport'},
                    {extend:'pdf', title:'Transport'},
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
            MasterService.readTransport({active:true}).then(function(res){
                if(res.data){
                    $scope.transports = res.data;
                }
            });
        }

        $scope.save = function(){
            if($scope.transport.name && $scope.transport.phone1){
                MasterService.saveTransport($scope.transport).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('Enter Transport Phone 1 and Transport Name');
            }
        }

        $scope.update = function(){
            if($scope.transport.name && $scope.transport.phone1){
                MasterService.updateTransport($scope.transport).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('Enter Transport Phone 1 and Transport Name');
            }
        }

        $scope.editTransport = function(obj){
            $scope.transport = angular.copy(obj);
            $scope.buttons = btnObj[1]
        }

        $scope.deleteTransport = function(id){
            MasterService.deleteTransport({_id:id}).then(function(res){
                if(res.data){
                    initController();
                }
            });
        }

        $scope.cancel = function(){
            $scope.transport = {};
            $scope.buttons = btnObj[0];
        }
    }
}());