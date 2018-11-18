const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "3";
client.on('ready', () => {
    console.log('I am ready!');
});

 client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -say

  if (command === "say") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }

});





client.on("ready", () => {
let channel =     client.channels.get("500017934052098048")
setInterval(function() {
channel.send(`احلا مسا عليك يابرو بوت ;joy; وعليك ياابو جبل`);
}, 25)
})







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
