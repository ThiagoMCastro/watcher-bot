const Discord = require("discord.js");
var mysql      = require('mysql');
var utf8 = require('utf8');
var connection = mysql.createConnection({
  host     : 's1.cpanel.ecxon.com.br',
  user     : 'watchert_thiago',
  password : 'Thiagom0@',
  database : 'watchert_db'
});
module.exports.run = async (bot, message, args) => {
connection.connect();
var adr = args.join;
var sql = 'SELECT * FROM filmes WHERE nome LIKE ' + (adr);
connection.query(sql, function (err, result) {
  if (err) throw err;
  const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle(utf8.decode(result[0].nome))
	.setURL('http://watchertv.xyz/filmes/filme.php?id=' + result[0].id)
	.setDescription(utf8.decode(result[0].descricao))
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
  name: "buscar"
}
