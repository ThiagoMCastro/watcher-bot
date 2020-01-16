const Discord = require("discord.js");
var mysql      = require('mysql');
var utf8 = require('utf8');
var connection = mysql.createConnection({
  host     : 'johnny.heliohost.org',
  user     : 'areaseca',
  password : 'Thiagom0@',
  database : 'areaseca_watcher'
});
module.exports.run = async (bot, message, args) => {
connection.connect();
var filmeid = Math.floor(Math.random() * 68);
var sql = 'SELECT id,nome,descricao,capa,foto FROM `filmes` ORDER BY RAND() LIMIT 1';
connection.query(sql, function (err, result) {
  if (err) throw err;
  const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle(result[0].nome)
	.setURL('http://watchertv.xyz/filmes/filme.php?id=' + result[0].id)
	.setDescription(result[0].descricao)
	.setThumbnail(result[0].foto)
	.addBlankField()
	.setImage(result[0].capa)
	.setTimestamp()
	.setFooter('http://www.watchertv.xyz');
  message.channel.send(exampleEmbed);
});
 
connection.end();
}

module.exports.help = {
  name: "recomendar"
}
