const Discord = require("discord.js");
var mysql = require("mysql");
var utf8 = require("utf8");
var connection = mysql.createConnection({
  host: "s1.cpanel.ecxon.com.br",
  user: "watchert_thiago",
  password: "Thiagom0@",
  database: "watchert_db"
});
module.exports.run = async (bot, message, args) => {
  connection.connect;
  var sql = `SELECT * FROM discord WHERE idd = ${message.author.id}`;
  connection.query(sql, function(err, rows) {
    if (err) throw err;
    
    if(!rows.length) {
      message.channel.send('Não tem conta');
    }
    if(rows.length > 0) {
      var sql = `SELECT FROM discord WHERE idd = ${message.author.id}`;
      connection.query(sql, function(err, results) {
      message.channel.send('Você tem exatamente R$' + results[0].dinheiro);
      }); }
  });

  connection.end();
};

module.exports.help = {
  name: "saldo"
};
