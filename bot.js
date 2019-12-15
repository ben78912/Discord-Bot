var Discord = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client();

bot.on('ready', () => {
    var time = today.getHours() + ':' + today.getMinutes();
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.user.username + ' - (' + bot.user.id + ')');
    logger.info('Time at: ' + time);
    bot.user.setActivity("");
});

bot.on('guildMemberAdd', member => {
});

bot.on('message', async message => {
    // Code to be executed when bot receives message
    // Prevent bot from replying to other bots.
    if(message.author.bot) return;
    // 
    var lower = message.content.toLowerCase();
});

bot.login(auth.token);
