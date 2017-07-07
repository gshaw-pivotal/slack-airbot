var Botkit = require('botkit');

require('./controllers/uptime_controller.js');
require('./controllers/help_controller.js');
require('./controllers/air_qual_controller.js');

var controller = Botkit.slackbot({
    debug: false,
});

controller.spawn({
    token: process.env.token
}).startRTM();

setupUptimeController(controller);

setupHelpController(controller);

setupAirQualController(controller);
