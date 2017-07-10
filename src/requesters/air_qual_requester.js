var request =  require('request');

require('../formatters/air_qual_formatter');
require('../responders/air_qual_responder.js');

makeAirQualRequest = function (controller, bot, causeMessage, location) {
    var apiKey = process.env.aqicnKey;
    request('http://api.waqi.info/feed/' + location + '/?token=' + apiKey, function(error, response, body){

        if (error != null) {
            postResponse(controller, bot, causeMessage, "Air quality report not available.");
        }

        var airQualReport = JSON.parse(body)

        if (airQualReport.status.toString().toLowerCase() == 'ok') {
            postResponse(controller, bot, causeMessage, formatAirQual(airQualReport, location))
        }
        else {
            postResponse(controller, bot, causeMessage, 'Unable to get air quality report for ' + location + '\n' +
            'Reason: ' + airQualReport.data)
        }
    });
};