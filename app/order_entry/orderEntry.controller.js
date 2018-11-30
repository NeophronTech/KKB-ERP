(function(){
    'use strict';
     angular.module('KKB').controller('OrderEntry.OrderEntryController', orderEntryController);

    function orderEntryController(DeliveryDispatchService, $scope, DTOptionsBuilder){

        var vm=this, btnObj=[{method:'save', title:'Save'}, {method:'update', title:'Update'}];
        loadDefault();

        function loadDefault(){
            $scope.orderEntry = {};
            $scope.orderEntries = [];
            $scope.buttons = btnObj[0];
            $scope.submitted = false;
            $scope.dtOptions = DTOptionsBuilder.newOptions()
                .withDOM('<"html5buttons"B>lTfgitp')
                .withButtons([
                    {extend:'copy'},
                    {extend:'csv'},
                    {extend:'excel', title:'Stock Book'},
                    {extend:'pdf', title:'Stock Book'},
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
            DeliveryDispatchService.readOrderEntry({active:true}).then(function(res){
                if(res.data){
                    $scope.orderEntries = res.data;
                }
            });
        }

        $scope.save = function(){
            if(angular.element($('#orderDate')).val()){
                $scope.orderEntry.orderDate = angular.element($('#orderDate')).val();
                DeliveryDispatchService.saveOrderEntry($scope.orderEntry).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('Select Date');
            }
        }

        $scope.update = function(){
            if(angular.element($('#orderDate')).val()){
                $scope.orderEntry.orderDate = angular.element($('#orderDate')).val();
                DeliveryDispatchService.updateOrderEntry($scope.orderEntry).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('Select Date');
            }
        }

        $scope.editOrderEntry = function(obj){
            $scope.orderEntry = angular.copy(obj);
            $scope.buttons = btnObj[1]
        }

        $scope.deleteOrderEntry = function(id){
            DeliveryDispatchService.deleteOrderEntry({_id:id}).then(function(res){
                if(res.data){
                    initController();
                }
            });
        }

        $scope.cancel = function(){
            $scope.orderEntry = {};
            $scope.submitted = false;
            $scope.buttons = btnObj[0];
        }

    }
}());