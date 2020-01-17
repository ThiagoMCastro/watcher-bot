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
  connection.query(`SELECT * FROM discord WHERE idd = ${message.author.id}`, function(err, rows) {
    if(err) {
        connection.end();
        return console.log(err);
    }
    if (!rows.length)
    {
            connection.query(`INSERT INTO discord (idd, usuario, dinheiro) VALUES ('${message.author.id},' '${message.author.username}', '6')`,){
            return message.channel.send("Como você não tinha nenhuma conta, criei uma pra você com 6 créditos.");
            }); 
    }
    else
    {
        return message.channel.send("Voce ja tem uma conta.");
    }
  });

  connection.end();
};

module.exports.help = {
  name: "saldo"
};
