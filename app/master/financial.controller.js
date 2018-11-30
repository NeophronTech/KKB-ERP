(function(){
    'use strict';
     angular.module('KKB').controller('Master.FinancialYearController', financialYearController);

    function financialYearController(MasterService, $scope, DTOptionsBuilder){

        var vm=this, btnObj=[{method:'save', title:'Save'}, {method:'update', title:'Update'}];
        loadDefault();

        function loadDefault(){
            $scope.financialYear = {};
            $scope.financialYears = [];
            $scope.buttons = btnObj[0];
            $scope.financialYear.status = false;
            $scope.dtOptions = DTOptionsBuilder.newOptions()
                .withDOM('<"html5buttons"B>lTfgitp')
                .withButtons([
                    {extend:'copy'},
                    {extend:'csv'},
                    {extend:'excel', title:'Financial Year'},
                    {extend:'pdf', title:'Financial Year'},
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
            MasterService.readFinancialYear({active:true}).then(function(res){
                if(res.data){
                    $scope.financialYears = res.data;
                }
            });
        }

        $scope.save = function(){
            if((angular.element($('#from')).val()) && (angular.element($('#to')).val()) && ($scope.financialYear.name)){
                $scope.financialYear.from = angular.element($('#from')).val();
                $scope.financialYear.to = angular.element($('#to')).val();
                MasterService.saveFinancialYear($scope.financialYear).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('Enter Financial Year, From Date and To Date');
            }
        }

        $scope.update = function(){
            if((angular.element($('#from')).val()) && (angular.element($('#to')).val()) && ($scope.financialYear.name)){
                $scope.financialYear.from = angular.element($('#from')).val();
                $scope.financialYear.to = angular.element($('#to')).val();
                MasterService.updateFinancialYear($scope.financialYear).then(function(res){
                    if(res.data){
                        initController();
                        $scope.cancel();
                    }
                });
            } else{
                alert('Enter Financial Year, From Date and To Date');
            }
        }

        $scope.editFinancialYear = function(obj){
            $scope.financialYear = angular.copy(obj);
            $scope.buttons = btnObj[1]
        }

        $scope.deleteFinancialYear = function(id){
            MasterService.deleteFinancialYear({_id:id}).then(function(res){
                if(res.data){
                    initController();
                }
            });
        }

        $scope.cancel = function(){
            $scope.financialYear = {};
            $scope.financialYear.status = false;
            $scope.buttons = btnObj[0];
        }
    }
}());