(function(){
    'use strict';
     angular.module('KKB').controller('Master.AddPartyController', addPartyController);

    function addPartyController(MasterService, $scope, $state, $stateParams){

        var vm=this, btnObj=[{method:'save', title:'Save'}, {method:'update', title:'Update'}], activeObj={active:true};
        loadDefault();
        
        function loadDefault(){
            if($stateParams.obj){
                $scope.buttons = btnObj[1];
                $scope.party = angular.copy($stateParams.obj);
                if($scope.party.area){
                    $scope.party.area = $scope.party.area._id;
                }
                if($scope.party.line){
                    $scope.party.line = $scope.party.line._id;
                }
                if($scope.party.state){
                    $scope.party.state = $scope.party.state._id;
                }
                if($scope.party.transport){
                    $scope.party.transport = $scope.party.transport._id;
                }
            } else{
                $scope.party = {};
                $scope.buttons = btnObj[0];
            }
            initController();
        }

        function initController(){
            MasterService.readLine(activeObj).then(function(res){
                if(res.data){
                    $scope.lines = res.data;
                }
            });

            MasterService.readArea(activeObj).then(function(res){
                if(res.data){
                    $scope.areas = res.data;
                }
            });

            MasterService.readState(activeObj).then(function(res){
                if(res.data){
                    $scope.states = res.data;
                }
            });

            MasterService.readTransport(activeObj).then(function(res){
                if(res.data){
                    $scope.transports = res.data;
                }
            });
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