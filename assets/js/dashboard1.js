(function($) {
"use strict";

    var barData = {
        labels: ["Japan", "Russia", "France", "China", "Germany", "UK", "USA"],
        datasets: [
            {
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

    var barOptions = {
        scaleBeginAtZero: true,
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        responsive: true
    }


    var ctx = document.getElementById("barChart").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(barData, barOptions);


 $('#SalaryTable').DataTable({
        dom: 'Bfrtip',
        buttons: [{
            text: 'copy',
            extend: "copy",
            className: 'btn dark btn-outline'
        }, {
            text: 'csv',
            extend: "csv",
            className: 'btn aqua btn-outline'
        }, {
            text: 'excel',
            extend: "excel",
            className: 'btn aqua btn-outline'
        }, {
            text: 'pdf',
            extend: "pdf",
            className: 'btn yellow  btn-outline'
        }, {
            text: 'print',
            extend: "print",
            className: 'btn purple  btn-outline'
        }]
    });
 
    
})(jQuery);