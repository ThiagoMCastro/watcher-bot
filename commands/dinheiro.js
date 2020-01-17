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
  let mencionado = message.mentions.users.first || message.guilds.member.get[]
  connection.connect;
  connection.query(
    `SELECT * FROM discord WHERE idd = ${message.author.id}`,
    function(err, rows) {
      if (err) {
        connection.end();
        return console.log(err);
      }
      message.channel.send('Seu saldo é de R$' + rows[0].dinheiro + ',00 reais');
    }
  );

  connection.end();
};

module.exports.help = {
  name: "saldo"
};
