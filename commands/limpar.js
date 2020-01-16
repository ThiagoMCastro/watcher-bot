const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Perdão meu amigo, você não tem nenhuma permissao para fazer isso!\""+message.content+"\"");
        console.log("Voce não tem permissao para fazer isso\""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Desculpe-me, eu não tenho permissao.\""+message.content+"\"");
        console.log("Eu não tenho permissao \""+message.content+"\"");
        return;
      }

      // Only delete messages if the channel type is TextChannel
      // DO NOT delete messages in DM Channel or Group DM Channel
      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);

            // Logging the number of messages deleted on both the channel and console.
            message.channel.sendMessage("Mensagens deletadas com sucesso. Total:" + (args));
            bot.channels.get(`666779669239955517`).send(`${message.author} Apagou mensagens. Total:  ` + (args))
            console.log('Mensagens deletadas com sucesso.')
          })
          .catch(err => {
            console.log('Erro durante a deletação das mensagens.');
            console.log(err);
          });
      }
}

module.exports.help = {
  name: "limpar"
}