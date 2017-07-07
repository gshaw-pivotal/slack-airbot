uptimeResponse = function (controller, bot, causeMessage, uptime){
    controller.storage.users.get(causeMessage.user,function(err, user) {
        bot.reply(causeMessage, 'airbot has been up for: ' + uptime);
    });
};