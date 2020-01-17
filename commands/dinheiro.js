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
  let target = message.mentions.users.first.id || message.author.id;
  connection.connect;
  connection.query(
    `SELECT * FROM discord WHERE idd = '${target}'`, function(err, rows) {
      if (err) throw (err);
      if(!rows[0]) return message.channel.send('Sem saldo.');
      
      let creditos = rows[0].dinheiro;
      
      message.channel.send('Saldo de R$' + creditos + ',00');
    }
  );

  connection.end();
};

module.exports.help = {
  name: "saldo"
};
