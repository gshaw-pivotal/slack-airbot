helpResponse = function (controller, bot, causeMessage){
    controller.storage.users.get(causeMessage.user,function(err, user) {
        bot.reply(causeMessage,
            'Hi, I am airbot\n' +
            'You can utilise me like so:\n' +
            '\'@airbot qual [location]\' - to get the air quality at the location specified\n' +
            '\'@airbot uptime\' - get my current uptime, since last restart');
    });
};