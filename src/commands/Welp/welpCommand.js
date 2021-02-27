const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('Help', 'welp', []);
  }
 
 async run(client, message, args) {
 const sectionEmbed = new Discord.MessageEmbed()
   
const funEmbed = new Discord.MessageEmbed()
   .setTitle('Fun Commands.')
   .addField('Avatar Command', 'Returns a users avatar.', 'h! avatar')
   .addField('Meme Commands', 'Returns a Meme to the channel.',  'h! meme')
   .addField('Snipe Command', 'Returns the last deleted message within a channel.', 'h! snipe')
   .addField('rps', 'Does rock paper scissors with you.', 'h! rps');


const moderationEmbed = new Discord.MessageEmbed()
   .setTitle('Moderation Commands.')
   .addField('Ban Command', 'Bans a member from the server')
   .addField('Kick Command', 'Kicks a member from the server')
   .addField('Mute Command', 'Mutes a member in the server')
   .addField('Nuke Command', 'Clones a channel and deletes the old one.')
   .addField('Unban Command', 'Unbans a member from the server')
   .addField('Unmute Command', 'Unmutes a member in a server');

   


if (!args[0]) return message.channel.send(sectionEmbed);
if (args[0] == 'information') return message.channel.send(infoEmbed);
else if (args[0] == 'fun') return message.channel.send(funEmbed);
else if (args[0] == 'moderation') return message.channel.send(moderationEmbed);
 }
}