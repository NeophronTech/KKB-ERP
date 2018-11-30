(function(){
    'use strict';
     angular.module('KKB').controller('Dashboard.IndexController', dashboardController);

    function dashboardController($scope){

        var vm = this;

        vm.barOptions = {
            scaleBeginAtZero: true,
            scaleShowGridLines: true,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            barShowStroke: true,
            barStrokeWidth: 2,
            barValueSpacing: 5,
            barDatasetSpacing: 1
        };
    
        /**
         * Data for Bar chart
         */
        vm.barData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(227,91,90,0.5)",
                    strokeColor: "rgba(227,91,90,0.8)",
                    highlightFill: "rgba(227,91,90,0.75)",
                    highlightStroke: "rgba(227,91,90,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    }

}());