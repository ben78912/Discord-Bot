
# Discord-Bot

Skeleton code for creating discord bots using`Discord.js`.

### Getting started
##### Download Node.js
To get started, download `Node.js` at [this website](https://nodejs.org/en/). This is what you will use to work with the Discord API.

#### Create the bot on Discord
Next you'll want to head to the [Discord developer portal](https://discordapp.com/developers/applications/)  and get your bot registered with Discord.
![Discord developer portal image](https://raw.githubusercontent.com/ben78912/Discord-Bot/master/discord.jpg)
Select *New App*, give your bot a name and save your changes.

Then, select *Bot* on the menu and select *Add bot* under the *Build-a-bot* option.

In the token section, select *"Click to reveal token"* to reveal your bots authorization token. This is a very important string of letters, and **should never be revealed to anyone **- whoever has this token can write code for your bot. Make sure to note this token down for later.

#### Adding your bot to your server
Next, select *General Information* on the menu again and locate your *CLIENT ID*. Copy this number and replace it in the following url where *@* is: 

https://discordapp.com/oauth2/authorize?&client_id=@&scope=bot&permissions=8

Then enter this URL into your browser. You will be directed to a page where you can add your bot to your server of choice. 

_Note: To add the bot to your server you will need admin permissions._

#### Creating the bot
You'll want to fork this repo, then clone it somewhere on your machine.

Your bot will consist of 3 files:
1. auth.json

   Insert your Discord bots token in this file.
   
2. package.json

   Add the name of your bot and change the description to match what you want.

3. bot.js
   
   This will be where the code for your bot is defined. Javascript knowledge will be nice for this. 

#### Installing dependencies
Open up your computer's command prompt / terminal, and navigate to folder where your bot is located. 

Then, run the following code
`npm install discord.js`
to install your bots dependencies. 

This should provide you with all the files your bot needs.

#### Running the bot
Type the following command
`node bot.js`
in your command prompt (make sure you are still in the same directory) to start your bot.

Now you can go back to your Discord server and test the bot. Send a message in a channel, and it should reply back with *"Hello World!"*.
