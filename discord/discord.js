const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });
  
  bot.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  });
  

  
module.exports.bot = bot;

