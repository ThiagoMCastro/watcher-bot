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
connection.query('SELECT * FROM Usuario WHERE Usuario = ? and Contra= ?',  [UsuarioReg,ContraReg]
,function(err,rows){
    if(err) {
        conDB.end();
        return console.log(err);
    }

    if (!rows.length)
    {
        connection.query('INSERT INTO Usuario SET ?',reg,function(err, results){
            conDB.end();
            return res.send("Usuario: "+req.body.Usuario+" y Contraseña: "+
                req.body.Contra + "REGISTRADOS");
        });
    }
    else
    {
        connection.end();
        return res.send("Este usuario ya existe");
    }
}
module.exports.help = {
  name: "saldo"
}
