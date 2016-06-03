var express = require('express');
var $ = require('jquery');
var Highcharts = require('highcharts');

function buildTrend2() {
    var chartHeight = window.innerHeight / 2;

    $('#container').append("<div id=chart-trend2 style='width:45%;float:left; margin:10;'></div>");

    var options = {

        chart: {
            type: 'spline',
            events: {
                load: function () {
                    var self = this;
                    setInterval(function () {
                        $.getJSON('../json/trends2.json', function (data) {
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
            text: 'Total Effort'
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
                text: 'Effort',
                margin: 10
            }
        },
        series: [{
            showInLegend: false,
            // pointInterval: 3600*1000 //minute
            data: []
            }]
    };

    $('#chart-trend2').highcharts(options);

}
