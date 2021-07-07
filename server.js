const http = require('http');
const express = require('express');
var utf8 = require('utf8');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const fs = require('fs')
const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const client = new Discord.Client();
var mysql = require("mysql");
var utf8 = require("utf8");
var connection = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: ""
});
bot.commands = new Discord.Collection();

bot.on("ready", () => {
  console.log(`Bot has started, with ${bot.guilds.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
  bot.user.setActivity(`com ${bot.users.size} usuários`);
});
function gerarxp() {
    let min = 10;
    let max = 30;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
bot.on('message', (message) => {
    connection.query(`SELECT * FROM discord WHERE idd = '${message.author.id}'`, (err, result) => {
      if(err) throw err;
      let sql;
      if(result.length < 1) {
        sql = `INSERT INTO discord (idd,usuario,dinheiro) VALUES ('${message.author.id}','${message.author.username}', ${gerarxp()})`;
      }
      else {
        sql = `UPDATE discord SET dinheiro=dinheiro + ${gerarxp()} WHERE idd = '${message.author.id}'`;
      }
      connection.query(sql, console.log);
    });
});

fs.readdir('./commands/', (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  
  if(jsfile.length <= 0){
    console.log("Couldn't find commands")
    return;
  }
  
  setTimeout(function(){ 
    console.log("Começando a inciar"); 
  }, 0);
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`)
    console.log(`${f} loaded`);
    bot.commands.set(props.help.name, props);
  });

    setTimeout(function(){ 
      console.log("Peguem a pipoca! O Bot do Watcher está online!"); 
    }, 1000)
});

bot.on("message", async message => {
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(command.slice(prefix.length));
  if (!message.content.startsWith(prefix)) return;
  if(commandfile) commandfile.run(bot,message,args);
  var author = message.author;
})
bot.on("guildMemberAdd" ,(message, member) => {
const bemvindo = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Olá!')
	.setURL('https://discord.js.org/')
	.setAuthor('Bem vindo', `${message.author.AvatarUrl}`, '#')
	.setThumbnail(`${message.author.avatarUrl}`)
	.setImage('https://cdn.glitch.com/915fd628-f530-4111-9cb2-707b050abe43%2Fbemvindo.png?v=1579145542099');

   bot.channels.get(`666779669239955517`).send(bemvindo)
});

bot.login(config.token);

