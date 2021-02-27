const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class RoleplayCommand extends BaseCommand {
  constructor() {
    super('Sukhdeep', 'Welp', []);
  }

  async run(client, message, args) {
   const messageToSay = args.join(" ");
   const sayEmbed = new Discord.MessageEmbed()
  .setTitle('gay r8 machine') 
  .setDescription('Sukhdeep is 100% gay 🏳️‍🌈')
  try {
    await message.channel.send(sayEmbed);
        } catch (err) {
          console.log(err);
    message.channel.send('I am not able to say that message.');
    }  
  }
}