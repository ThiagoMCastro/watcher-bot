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
var sql = "INSERT INTO `discord` (`idd`, `usuario`, `dinheiro`) VALUES ('"+ `${message.author.id}` + "','" + `${message.author.name}` + "', '6')";
connection.query(sql, function (err, result) {
  if (err) throw err;
  message.channel.send(`${message.author.id}`);
});
 
connection.end();
}

module.exports.help = {
  name: "saldo"
}
