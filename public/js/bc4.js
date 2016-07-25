var express = require('express');
var $ = require('jquery');
var Highcharts = require('highcharts');

function buildTrend4() {
    var chartHeight = window.innerHeight / 2;
    
    $('#container').append("<div id=chart-trend4 style='width:45%;float:left; margin:10;'></div>");

    var options = {

        chart: {
            type: 'spline',
            events: {
                load: function () {
                    var self = this;
                    setInterval(function () {
                        $.getJSON('../json/trends4.json', function (data) {
                            var series = self.series[0];
                            series.setData(data);
                        });
                    }, 1000);
                }
            },
            animation: {
                duration: 200
            },
            height: chartHeight
        },
        title: {
            text: 'Total Widgets'
        },
        subtitle: {
            text: 'past 24 hours'
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: 'Hour'
            }
        },
        yAxis: {
            title: {
                text: 'Widgets',
                margin: 10
            }
        },
        series: [{
            showInLegend: false,
            // pointInterval: 3600*1000 //minute
            data: []
            }]
    };

    $('#chart-trend4').highcharts(options);

}
