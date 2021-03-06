var Discord = require('discord.js');
var auth = require('./auth.json');
// Configure logger settings
// Initialize Discord Bot
var bot = new Discord.Client();
var today = new Date();

bot.on('ready', () => {
    var time = today.getHours() + ':' + today.getMinutes();
    console.log('Connected');
    console.log('Logged in as: ' + bot.user.username + ' - (' + bot.user.id + ')');
    console.log('Time at: ' + time);
    bot.user.setActivity("");
});

bot.on('guildMemberAdd', member => {
    // Code that gets executed when a new member joins the channel
});

bot.on('message', async message => {
    // Code to be executed when bot receives message
    // Prevent bot from replying to other bots.
    if(message.author.bot) return;
    // 
    var lower = message.content.toLowerCase();

    // It's a good idea to choose a keyword that starts your bot commands ie. !, ;;
    message.channel.send('Hello World!');
});

bot.login(auth.token);