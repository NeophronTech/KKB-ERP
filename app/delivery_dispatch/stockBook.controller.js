(function(){
    'use strict';
     angular.module('KKB').controller('DeliveryDispatch.StockBookController', stockBookController);

    function stockBookController(DeliveryDispatchService, $scope, DTOptionsBuilder){

        var vm=this, btnObj=[{method:'save', title:'Save'}, {method:'update', title:'Update'}];
        loadDefault();

        function loadDefault(){
            $scope.stockBook = {};
            $scope.stockBooks = [];
            $scope.buttons = btnObj[0];
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
            DeliveryDispatchService.readStockBook({active:true}).then(function(res){
                if(res.data){
                    $scope.stockBooks = res.data;
                }
            });
        }

        $scope.save = function(){
            if((angular.element($('#orderDate')).val()) && ($scope.stockBook.purchaseCost) && ($scope.stockBook.name) && ($scope.stockBook.inward)){
                $scope.stockBook.orderDate = angular.element($('#orderDate')).val();
                DeliveryDispatchService.saveStockBook($scope.stockBook).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('All the Fields Are Required');
            }
        }

        $scope.update = function(){
            if((angular.element($('#orderDate')).val()) && ($scope.stockBook.purchaseCost) && ($scope.stockBook.name) && ($scope.stockBook.inward)){
                $scope.stockBook.orderDate = angular.element($('#orderDate')).val();
                DeliveryDispatchService.updateStockBook($scope.stockBook).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('All the Fields Are Required');
            }
        }

        $scope.editStockBook = function(obj){
            $scope.stockBook = angular.copy(obj);
            $scope.buttons = btnObj[1]
        }

        $scope.deleteStockBook = function(id){
            DeliveryDispatchService.deleteStockBook({_id:id}).then(function(res){
                if(res.data){
                    initController();
                }
            });
        }

        $scope.cancel = function(){
            $scope.stockBook = {};
            $scope.buttons = btnObj[0];
        }
    }
}());