(function(){
    'use strict';
     angular.module('KKB').controller('Master.PartyController', partyController);

    function partyController(MasterService, $scope, $state, DTOptionsBuilder){

        var vm = this;
        loadDefault();

        function loadDefault(){
            $scope.parties = [];
            $scope.dtOptions = DTOptionsBuilder.newOptions()
                .withDOM('<"html5buttons"B>lTfgitp')
                .withButtons([
                    {extend:'copy'},
                    {extend:'csv'},
                    {extend:'excel', title:'Party - Ledger'},
                    {extend:'pdf', title:'Party - Ledger'},
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
            MasterService.readParty({active:true}).then(function(res){
                if(res.data){
                    $scope.parties = res.data;
                }
            });
        }

        $scope.addNew = function(){
            $state.go('master.addParty', null, {reload:true});
        }

        $scope.editParty = function(party){
            $state.go('master.addParty', {obj:party}, {reload:true});
        }

        $scope.deleteParty = function(id){
            MasterService.deleteParty({_id:id}).then(function(res){
                if(res.data){
                    initController();
                }
            });
        }
    }
}());