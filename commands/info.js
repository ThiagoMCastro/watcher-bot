const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => { 
  message.channel.send('Que bom que perguntou :)\nSite <:home:666784838048808970>: `http://watchertv.xyz`\nPágina no facebook <:facebook:666783181248266270> : `https://facebook.com/WatcherOficial`')
  message.channel.send(`E eu estou em ${bot.guilds.size} Servidores`);  
}

module.exports.help = {
  name: "info"
}
