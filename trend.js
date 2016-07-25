<<<<<<< HEAD
var express = require('express');
var app = express();

//require('highcharts/modules/exporting')(Highcharts);
var port = process.env.PORT || 5000;
app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('src/css'));
app.use(express.static('public/Python'));
app.use(express.static('public/json'));
var getDataRouter = express.Router();

getDataRouter.route('/getData')
    .get(function(req, res) {
        
        
    });

app.use('/api', getDataRouter);
app.listen(port, function (err) {
    console.log('Listening on port: ' + port);
});


    
=======
var express = require('express');
var app = express();
//require('highcharts/modules/exporting')(Highcharts);
var port = process.env.PORT || 5000;
app.use(express.static('public'));
app.use(express.static('src/views'));
app.listen(port, function (err) {
    console.log('Listening on port: ' + port);
});
>>>>>>> 2754e2434b626ae77cf7013bc60c18772be48634
