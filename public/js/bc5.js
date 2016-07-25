var express = require('express');
var $ = require('jquery');
var Highcharts = require('highcharts');

function buildTrend5() {
    var chartHeight = window.innerHeight / 2;
    
    $('#container').append("<div id=chart-trend5 style='width:45%;float:right; margin:10;'></div>");

    var options = {

        chart: {
            type: 'spline',
            events: {
                load: function () {
                    var self = this;
                    setInterval(function () {
                        $.getJSON('../json/trends5.json', function (data) {
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
            text: 'Total Gadgets'
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
                text: 'Gadgets',
                margin: 10
            }
        },
        series: [{
            showInLegend: false,
            // pointInterval: 3600*1000 //minute
            data: []
            }]
    };

    $('#chart-trend5').highcharts(options);

}
