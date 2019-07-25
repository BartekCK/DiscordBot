const discord = require('./discord/discord');
const config = require('./configKey');
var RESTapi =  require('./express/express');

discord.bot.login(config.TOKEN);

var server = RESTapi.listen(config.PORT);