const Discord = require("discord.js");
var mysql      = require('mysql');
var utf8 = require('utf8');
var connection = mysql.createConnection({
  host     : 's1.cpanel.ecxon.com.br',
  user     : 'watchert_thiago',
  password : 'Thiagom0@',
  database : 'watchert_db'
});
module.exports.run = async (bot, message) => {
connection.connect();
var sql = `SELECT * FROM discord WHERE id = ${message.author.id}`;
connection.query(sql, function (err, result) {
  if (err) throw err;
  const exampleEmbed = new Discord.RichEmbed()
	.setColor('#00ff3c')
	.setTitle('Seu saldo bancário')
	.setDescription('Você tem exatamente R$')
	.setThumbnail(`${message.author.avatarUrl}`)
  message.channel.send(`${message.author.id}`);
});
 
connection.end();
}

module.exports.help = {
  name: "saldo"
}
