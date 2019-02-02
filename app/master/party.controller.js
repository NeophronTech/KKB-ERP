(function(){
    'use strict';
     angular.module('AdminUI').controller('Master.PartyController', partyController);

    function partyController($scope, $state, DTOptionsBuilder){

        var vm = this;
        
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

        $scope.persons = [
            {Name:"Alden Kupferberg", Position:"Software Engineer", Office:"New York", Age:"41"},
            {Name:"Auckland Straight", Position:"Junior Technical Author", Office:"London", Age:"66"},
            {Name:"Aunt Emma", Position:"Support Lead", Office:"New York", Age:"22"},
            {Name:"Brad", Position:"Javascript Developer", Office:"London", Age:"39"}
        ];

        $scope.addNew = function(){
            $state.go('master.addParty',null,{reload: true});
        }
    }
}());