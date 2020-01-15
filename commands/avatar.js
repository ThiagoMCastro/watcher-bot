
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setImage(user.avatarURL)
    .setColor('#275BF0')
    message.channel.send(embed)
}

module.exports.help = {
  name: "avatar"
}
