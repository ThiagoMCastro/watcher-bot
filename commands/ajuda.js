const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
  message.channel.send('Que bom que perguntou :)\n**Comandos do bot <@567622243002351628>(Prefixo ?):**\n```ajuda - comandos;\nping - Veja meu ping :);\nrecomendar - Tenha um filme recomendado:);\navatar @usuario - Ve o avatar do usuário mencionado;\ndizer (frase) - O bot diz o que você quiser;\nbuscar (id do filme) - Busca um filme;\ninfo - informações do Watcher.```')
}

module.exports.help = {
  name: "ajuda"
}
