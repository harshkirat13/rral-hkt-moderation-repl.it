const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class RoleplayCommand extends BaseCommand {
  constructor() {
    super('help', 'Welp', []);
  }

  async run(client, message, args) {
   const messageToSay = args.join(" ");
   const sayEmbed = new Discord.MessageEmbed()
  .setTitle('Help') 
  .addField('h! Help moderation for moderation help')
  .addField('h! Help fun for fun commands help')
  .setFooter(message.author.tag ,message.author.displayAvatarURL())
  .setColor("#ADD8E6")
  .setTimestamp()
  try {
    await message.channel.send(sayEmbed);
        } catch (err) {
          console.log(err);
    message.channel.send('I am not able to say that message.');
    }  
  }
}