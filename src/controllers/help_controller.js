require('../responders/help_responder.js');

module.exports = setupHelpController = function (controller) {
    controller.hears(['help'],'direct_message,direct_mention,mention',function(bot, message) {

        helpResponse(controller, bot, message);
    });
};