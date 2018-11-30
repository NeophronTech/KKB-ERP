(function(){
    'use strict';
     angular.module('KKB').controller('Master.AddPartyController', addPartyController);

    function addPartyController(MasterService, $scope, $state, $stateParams){

        var vm=this, btnObj=[{method:'save', title:'Save'}, {method:'update', title:'Update'}];
        loadDefault();
        
        function loadDefault(){
            if($stateParams.obj){
                $scope.party = $stateParams.obj;
                $scope.buttons = btnObj[1];
            } else{
                $scope.party = {};
                $scope.buttons = btnObj[0];
            }
        }

        $scope.save = function(){
            if((angular.element($('#discountRemoveDate')).val()) && (angular.element($('#discountDate')).val())){
                $scope.party.discountRemoveDate = angular.element($('#discountRemoveDate')).val();
                $scope.party.discountDate = angular.element($('#discountDate')).val();
                MasterService.saveParty($scope.party).then(function(res){
                    if(res.data){
                        $scope.cancel();
                    }
                });
            } else{
                swal('', 'Select Discount and Discount remove date');
            }
        }

        $scope.update = function(){
            if((angular.element($('#discountRemoveDate')).val()) && (angular.element($('#discountDate')).val())){
                $scope.party.discountRemoveDate = angular.element($('#discountRemoveDate')).val();
                $scope.party.discountDate = angular.element($('#discountDate')).val();
                MasterService.updateParty($scope.party).then(function(res){
                    if(res.data){
                        $state.go('master.party', null, {reload:true});
                    }
                });
            } else{
                alert('Select Discount and Discount remove date');
            }
        }

        $scope.cancel = function(){
            $state.reload();
        }
    }
}());