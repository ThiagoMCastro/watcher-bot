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
connection.query(`SELECT * FROM usuariodiscord WHERE user = '${message.author.username}'`, (err, result) => {
     
});
 
connection.end();
}

module.exports.help = {
  name: "gxp"
}
