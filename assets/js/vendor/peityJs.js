$(function() {
    $("span.pie").peity("pie", {
        fill: ['#e35b5a', '#d7d7d7', '#ffffff']
    })

    $(".line").peity("line",{
        fill: '#e35b5a',
        stroke:'#b72625',
    })

    $(".bar").peity("bar", {
        fill: ["#e35b5a", "#d7d7d7"]
    })

    $(".bar_dashboard").peity("bar", {
        fill: ["#e35b5a", "#d7d7d7"],
        width:100
    })

    $('.donut').peity('donut', {
        fill: ['#e35b5a', '#d7d7d7', '#ffffff']
    })

    var updatingChart = $(".updating-chart").peity("line", { fill: '#e35b5a',stroke:'#bd201f', width: 64 })

    setInterval(function() {
        var random = Math.round(Math.random() * 10)
        var values = updatingChart.text().split(",")
        values.shift()
        values.push(random)

        updatingChart
            .text(values.join(","))
            .change()
    }, 1000);

});