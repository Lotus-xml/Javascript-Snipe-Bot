const Discord = require('discord.js');
const client = new Discord.Client();
let femboys = null;

client.on('ready', () => {
  console.log(`Bot Username: ${client.user.tag}`);
});

client.on('messageDelete', (message) => {
  femboys = message;
});

client.on('message', (message) => {
  if (message.content === '!snipe') {
    if (femboys) {
      const embed = new Discord.MessageEmbed()
        .setColor(owo())
        .setTitle('UwU')
        .setDescription(femboys.content)
        .setAuthor(femboys.author.tag, femboys.author.avatarURL())
        .setTimestamp();
      message.channel.send(embed);
    } else {
      message.channel.send('No messages to snipe dumbass');
    }
  }
});

function owo() {
  const colors = ['#0099ff', '#ff99ff', '#00ff99', '#ff9900'];
  return colors[Math.floor(Math.random() * colors.length)];
}

client.login('token goes here idiot');
