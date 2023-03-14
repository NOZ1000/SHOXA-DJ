const Discord = require('discord.js');
require('dotenv').config();
const CLIENT_TOKEN = process.env.CLIENT_TOKEN;
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.GuildVoiceStates,
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  console.log(`Recieved message ${message.content}`);
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});


client.login(CLIENT_TOKEN);