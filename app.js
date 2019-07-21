const Discord = require('discord.js');
const client = new Discord.Client();
const token = require("./configKey");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  });
  

    console.log(token);
    client.login(token);
  
