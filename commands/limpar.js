const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var adr = parseInt(args[0], 10);
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(adr);
                }, function(err){message.channel.send("Erro ao deletar")})                        
        }
}

module.exports.help = {
  name: "limpar"
}