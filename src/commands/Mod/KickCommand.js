const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'Mod', []);
  }

  async run(client, message, args) {
   if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cannot use this command");
   const mentionedMember = message.mentions.members.first();
   let reason = args.slice(1).join(" ");
   if (!reason) reason = "No reason given";
   const kickEmbed = new Discord.MessageEmbed()
  
   .setTitle (`You were kicked from ${message.guild.name}`)
    .setDescription(`Reason: ${reason}`)
    .setColor("#F53911")
    .setTimestamp()
    .setFooter(client.user.tag, client.user.displayAvatarURL());
   
     // -kick @user dm ads
  if (!args[0]) return message.channel.send("You need to state a user to kick. \`/kick @user Reason`\ ");
  if (!mentionedMember) return message.channel.send("The user is not in the server");
  if (!mentionedMember.kickable) message.channel.send('I cannot kick that member.');

  try {
    await mentionedMember.send(kickEmbed);
  } catch (err) {
    console.log(`i was unable to message the user make sure my role is higher then the users role.`);
  }
  
  try {
    await mentionedMember.kick(reason)
    return message.channel.send("you have successfully kicked @" + mentionedMember.user.tag)
  } catch (err) {
    console.log(err);
    return message.channel.send("I was unable to kick the user mentioned.");
    
  }
}
}