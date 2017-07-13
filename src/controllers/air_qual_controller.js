var os = require('os');
var request =  require('request');

require('../requesters/air_qual_requester');

setupAirQualController = function (controller) {
    controller.hears(['qual-text (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/qual-text (.*)/i)[1];
        makeAirQualRequest(controller, bot, message, location)
    });

    controller.hears(['qual (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/qual (.*)/i)[1];
        makeAirQualRequest(controller, bot, message, location)
    });
};