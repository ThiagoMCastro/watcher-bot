const Discord = require("discord.js");
var money;
money = 150;

module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Meu ping é de ${m.createdTimestamp - message.createdTimestamp}ms. Ping da api é de ${Math.round(bot.ping)}ms`)
}

module.exports.help = {
  name: "ping"
}
