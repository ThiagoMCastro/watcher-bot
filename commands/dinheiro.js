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
var sql = 'SELECT * FROM discord WHERE idd = ' + `${message.author.id}`;
connection.query(sql, function (err, rows) {
  if(err) {
        conDB.end();
        return console.log(err);
    }

    if (!rows.length)
    {
        connection.query('INSERT INTO Usuario SET ?',reg,function(err, results){
            connection.end();
            me
        });
    }
    else
    {
        conDB.end();
        return res.send("Este usuario ya existe");
    }
});
 
connection.end();
}

module.exports.help = {
  name: "saldo"
}
