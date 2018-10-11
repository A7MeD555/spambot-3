const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







client.on("ready", () => {
let channel =     client.channels.get("500017934052098048")
setInterval(function() {
channel.send(`احلا مسا عليك يابرو بوت ;joy; وعليك ياابو جبل`);
}, 25)
})







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
