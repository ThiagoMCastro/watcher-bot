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
    if (err) throw err;
    let sql;
    if(!rows.length) {
      sql = `INSERT INTO discord ( idd, usuario, dinheiro) VALUES ('${message.author.id}', '${message.author.username}', '6')`;
      message.channel.send('Não tem conta. Vou criar uma! :)');
    }
    else{
      sql = `SELECT FROM discord WHERE idd = ${message.author.id}`;
      message.channel.send('Você tem exatamente algum saldo fodido seu merda me mama fdp do krl seu lixo fodido resto de placenta do krl');
    }
  });

  connection.end();
};

module.exports.help = {
  name: "saldo"
};
