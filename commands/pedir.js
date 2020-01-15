const Discord = require("discord.js");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'johnny.heliohost.org',
  user     : 'areaseca',
  password : 'Thiagom0@',
  database : 'areaseca_watcher'
});
module.exports.run = async (bot, message, args) => {
connection.connect();
var adr = args.splice(0,100).join(" ")
connection.query(`INSERT INTO pedidos (id, pedinte, filme) VALUES (NULL, '${message.author.username}',` + mysql.escape(adr) + `)`, function (err) {
  if (err) throw err;
  message.channel.send(`Ok, ${message.author}. Pedido feito! Seu pedido foi ` + (adr));
});
 
connection.end();
}

module.exports.help = {
  name: "pedir"
}
