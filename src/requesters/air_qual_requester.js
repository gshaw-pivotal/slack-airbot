var request =  require('request');

require('../formatters/air_qual_formatter');
require('../responders/air_qual_responder.js');

makeAirQualRequest = function (controller, bot, causeMessage, location) {
    var apiKey = process.env.aqicnKey;
    request('http://api.waqi.info/feed/' + location + '/?token=' + apiKey, function(error, response, body){

        if (error != null) {
            console.log("Request error: " + error);
            postResponse(controller, bot, causeMessage, "Air Qual not available.");
        }

        var airQualReport = JSON.parse(body);
        postResponse(controller, bot, causeMessage, formatAirQual(airQualReport, location))
    });
};