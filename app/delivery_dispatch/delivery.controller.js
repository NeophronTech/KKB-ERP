(function(){
    'use strict';
     angular.module('KKB').controller('DeliveryDispatch.DeliveryController', deliveryController);

    function deliveryController(DeliveryDispatchService, $scope, DTOptionsBuilder){

        var vm=this, btnObj=[{method:'save', title:'Save'}, {method:'update', title:'Update'}];
        loadDefault();

        function loadDefault(){
            $scope.delivery = {};
            $scope.deliveries = [];
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
            DeliveryDispatchService.readDelivery({active:true}).then(function(res){
                if(res.data){
                    $scope.deliveries = res.data;
                }
            });
        }

        $scope.save = function(){
            DeliveryDispatchService.saveDelivery($scope.delivery).then(function(res){
                if(res.data){
                    initController();
                    $scope.cancel();
                }
            });
        }

        $scope.update = function(){
            DeliveryDispatchService.updateDelivery($scope.delivery).then(function(res){
                if(res.data){
                    initController();
                    $scope.cancel();
                }
            });
        }

        $scope.editDelivery = function(obj){
            $scope.delivery = angular.copy(obj);
            $scope.buttons = btnObj[1]
        }

        $scope.deleteDelivery = function(id){
            DeliveryDispatchService.deleteDelivery({_id:id}).then(function(res){
                if(res.data){
                    initController();
                }
            });
        }

        $scope.cancel = function(){
            $scope.delivery = {};
            $scope.buttons = btnObj[0];
            $scope.submitted = false;
        }
    }
}());