const Discord = require("discord.js");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 's1.cpanel.ecxon.com.br',
  user     : 'watchert_thiago',
  password : 'Thiagom0@',
  database : 'watchert_db'
});
module.exports.run = async (bot, message, args) => {
connection.connect();
var adr = args.splice(0,100).join(" ")
connection.query(`INSERT INTO pedidos (id, pedinte, filme) VALUES (NULL, '${message.author.username}',` + mysql.escape(adr) + `)`, function (err) {
  if (err) throw err;
  message.channel.send(`Ok, ${message.author}. Pedido feito! Seu pedido foi ` + (adr));
  bot.channels.get(`665976048587898920`).send(`${message.author} Fez um pedido, no caso foi:  ` + (adr))
});
 
connection.end();
}

module.exports.help = {
  name: "pedir"
}
