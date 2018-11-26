(function($) {
"use strict";

 $('#drop-remove').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });


$("#sparkline7").sparkline([52, 12, 44], {
        type: 'pie',
        height: '150px',
        sliceColors: ['#e35b5a', '#b3b3b3', '#e4f0fb']});

    $("#sparkline10").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7], {
        type: 'bar',
        barWidth: 8,
        height: '150px',
        barColor: '#e35b5a',
        negBarColor: '#c6c6c6'});

    $("#sparkline9").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
        type: 'line',
        lineWidth: 1,
        height: '150px',
        lineColor: '#e35b5a',
        fillColor: '#ffffff',
    });


  /* initialize the calendar
         -----------------------------------------------------------------*/
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

         $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            height: 500,
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar
            drop: function() {
                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }
            },
            events: [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1)
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d-5),
                    end: new Date(y, m, d-2)
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d-3, 16, 0),
                    allDay: false
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d+4, 16, 0),
                    allDay: false
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d+1, 19, 0),
                    end: new Date(y, m, d+1, 22, 30),
                    allDay: false
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/'
                }
            ]
        });

   var data2 = [
        [gd(2012, 1, 1), 7],
        [gd(2012, 1, 2), 6],
        [gd(2012, 1, 3), 4],
        [gd(2012, 1, 4), 8],
        [gd(2012, 1, 5), 9],
        [gd(2012, 1, 6), 7],
        [gd(2012, 1, 7), 5],
        [gd(2012, 1, 8), 4],
        [gd(2012, 1, 9), 7],
        [gd(2012, 1, 10), 8],
        [gd(2012, 1, 11), 9],
        [gd(2012, 1, 12), 6],
        [gd(2012, 1, 13), 4],
        [gd(2012, 1, 14), 5],
        [gd(2012, 1, 15), 11],
        [gd(2012, 1, 16), 8],
        [gd(2012, 1, 17), 8],
        [gd(2012, 1, 18), 11],
        [gd(2012, 1, 19), 11],
        [gd(2012, 1, 20), 6],
        [gd(2012, 1, 21), 6],
        [gd(2012, 1, 22), 8],
        [gd(2012, 1, 23), 11],
        [gd(2012, 1, 24), 13],
        [gd(2012, 1, 25), 7],
        [gd(2012, 1, 26), 9],
        [gd(2012, 1, 27), 9],
        [gd(2012, 1, 28), 8],
        [gd(2012, 1, 29), 5],
        [gd(2012, 1, 30), 8],
        [gd(2012, 1, 31), 15]
    ];

    var data3 = [
        [gd(2012, 1, 1), 700],
        [gd(2012, 1, 2), 400],
        [gd(2012, 1, 3), 600],
        [gd(2012, 1, 4), 500],
        [gd(2012, 1, 5), 400],
        [gd(2012, 1, 6), 356],
        [gd(2012, 1, 7), 800],
        [gd(2012, 1, 8), 489],
        [gd(2012, 1, 9), 367],
        [gd(2012, 1, 10), 776],
        [gd(2012, 1, 11), 689],
        [gd(2012, 1, 12), 600],
        [gd(2012, 1, 13), 400],
        [gd(2012, 1, 14), 500],
        [gd(2012, 1, 15), 700],
        [gd(2012, 1, 16), 586],
        [gd(2012, 1, 17), 245],
        [gd(2012, 1, 18), 788],
        [gd(2012, 1, 19), 888],
        [gd(2012, 1, 20), 688],
        [gd(2012, 1, 21), 787],
        [gd(2012, 1, 22), 344],
        [gd(2012, 1, 23), 999],
        [gd(2012, 1, 24), 567],
        [gd(2012, 1, 25), 686],
        [gd(2012, 1, 26), 566],
        [gd(2012, 1, 27), 888],
        [gd(2012, 1, 28), 700],
        [gd(2012, 1, 29), 178],
        [gd(2012, 1, 30), 455],
        [gd(2012, 1, 31), 893]
    ];


    var dataset = [{
        label: "Number of orders",
        data: data3,
        color: "#e35b5a",       
        bars: {
            show: true,
            align: "center",
            barWidth: 24 * 60 * 60 * 600,
            lineWidth: 0,
            fillColor: {
                colors: [{
                    opacity: 0.9
                }, {
                    opacity: 0.9
                }]
            }
        }

    }, {
        label: "Payments",
        data: data2,
        yaxis: 2,
        color: "#292929",
        lines: {
            lineWidth: 1,
            show: true,
            fill: true,
            fillColor: {
                colors: [{
                    opacity: 0.4
                }, {
                    opacity: 0.4
                }]
            }
        },
        splines: {
            show: false,
            tension: 0.6,
            lineWidth: 1,
            fill: 0.1
        },
    }];


    var options = {
        xaxis: {
            mode: "time",
            tickSize: [3, "day"],
            tickLength: 0,
            axisLabel: "Date",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Arial',
            axisLabelPadding: 10,
            color: "#d5d5d5"
        },
        yaxes: [{
            position: "left",
            max: 1070,
            color: "#d5d5d5",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Arial',
            axisLabelPadding: 3
        }, {
            position: "right",
            clolor: "#d5d5d5",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: ' Arial',
            axisLabelPadding: 67
        }],
        legend: {
            noColumns: 1,
            labelBoxBorderColor: "#000000",
            position: "nw"
        },
        grid: {
            hoverable: false,
            borderWidth: 0
        }
    };

    function gd(year, month, day) {
        return new Date(year, month - 1, day).getTime();
    }

    var previousPoint = null,
        previousLabel = null;

    $.plot($("#flot-dashboard-chart"), dataset, options);




     var tax_data = [
        { y: '2008', a: 50, b: 0 },
            { y: '2009', a: 75, b: 50 },
            { y: '2010', a: 30, b: 80 },
            { y: '2011', a: 50, b: 50 },
            { y: '2012', a: 75, b: 10 },
            { y: '2013', a: 50, b: 40 },
            { y: '2014', a: 75, b: 50 },
            { y: '2015', a: 100, b: 70 }
  ];
  Morris.Line({
    element: 'hero-graph',
    data: tax_data,
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Licensed', 'Off the road'],
    resize: true,
    lineColors: ['#e35b5a', '#ddd'],
  });

  Morris.Donut({
    element: 'hero-donut',
    data: [
                {label: "Download Sales", value: 50},
                {label: "In-Store Sales", value: 35},
                {label: "Mail-Order Sales", value: 15}
            ],
    resize: true,
    colors: ['#e35b5a', '#44b6ae','#ddd'],
    formatter: function (y) { return y + "%" }
  });




  Morris.Bar({
    element: 'hero-bar',
    data: [
      { y: '2010', a: 75 },
            { y: '2012', a: 30 },
            { y: '2013', a: 40 },
            { y: '2014', a: 32 },
            { y: '2015', a: 60 },
            { y: '2016', a: 93 },
            { y: '2017', a: 50 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Statistics'],
    barRatio: 0.1,
    xLabelAngle: 0,
    hideHover: 'auto',
    resize: true,
    gridLineColor: '#eeeeee',
    barSizeRatio: 0.2,
    barColors: ['#e35b5a', '#cacaca'],
  });

  new Morris.Line({
    element: 'examplefirst',
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Value'],
    data: [
      {year: '2008', value: 20},
      {year: '2009', value: 10},
      {year: '2010', value: 5},
      {year: '2011', value: 5},
      {year: '2012', value: 20}
    ]
  });

  $('.code-example').each(function (index, el) {
    eval($(el).text());
  });
 


 /* initialize the external events
    -----------------------------------------------------------------*/

    $('#external-events .fc-event').each(function() {

      // store data so the calendar knows to render an event upon drop
      $(this).data('event', {
        title: $.trim($(this).text()), // use the element's text as the event title
        stick: true // maintain when user navigates (see docs on the renderEvent method)
      });

      // make the event draggable using jQuery UI
      $(this).draggable({
        zIndex: 999,
        revert: true,      // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
      });

    });
    
})(jQuery);