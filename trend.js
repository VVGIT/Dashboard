var express = require('express');
var app = express();
//require('highcharts/modules/exporting')(Highcharts);
var port = process.env.PORT || 5000;
app.use(express.static('public'));
app.use(express.static('src/views'));
app.listen(port, function (err) {
    console.log('Listening on port: ' + port);
});