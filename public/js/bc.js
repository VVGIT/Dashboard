var express = require('express');
var $ = require('jquery');
var Highcharts = require('highcharts');

function buildTrend() {
    var chartHeight = window.innerHeight / 2;
    $('#container').append('<div id=chart-trend style=&quot;width:100%&quot;></div>');

    var options = {

        chart: {
            type: 'spline',
            events: {
                load: function () {
                    var self = this;
                    setInterval(function () {
                        $.getJSON('../json/trends.json', function (data) {
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
            text: 'Total Messages Sent'
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
                text: 'Messages',
                margin: 10
            }
        },
        series: [{
            showInLegend: false,
            // pointInterval: 3600*1000 //minute
            data: []
            }]
    };

    $('#chart-trend').highcharts(options);

}