var os = require('os');
var request =  require('request');

require('../responders/air_qual_responder.js');

setupAirQualController = function (controller) {
    controller.hears(['qual (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/qual (.*)/i)[1];
        postResponse(controller, bot, message, "Air quality request received for: " + location)
    });
};