const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'Mod', []);
  }

  async run(client, message, args) {
  if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You cannot use this command! You need the mute members permission.")
  if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("My role does not have the manage roles permission.")

  let reason = args.slice(1).join(" ");
  const muteRole = message.guild.roles.cache.get('809248288267173898');
  const memberRole = message.guild.roles.cache.get('799507491381575680');
  const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  const muteEmbed = new Discord.MessageEmbed()
   .setTitle(`You have been muted in ${message.guild.name}`)
   .setDescription(`Reason for being muted: ${reason}`)
   .setColor("#760000")
   .setTimestamp();
    

  if (!args[0]) return message.channel.send("\`h!mute @user reason\` or \`h!mute id reason\`");
  if (!mentionedMember) return message.channel.send("The member mentioned is not in the server.");
  if (mentionedMember.user.id == message.author.id) return message.channel.send("You cannot mute yourself.");
  if (mentionedMember.user.id == client.user.id) return message.channel.send("You cannot mute me.")
  if (!reason) reason = 'No reason given'
  if (mentionedMember.roles.cache.has(muteRole.id)) return message.channel.send("This member is already muted.")
  if (message.member.roles.highest.position <= mentionedMember.roles.highest.position) return message.channel.send("You can't mute someone with a role higher than you.")

  await mentionedMember.send(muteEmbed).catch(err => console.log(err));
  await mentionedMember.roles.add(muteRole.id).catch(err => console.log(err).then(message.channel.send("There was an issue giving the muted role.")));
  await mentionedMember.roles.remove(memberRole.id).catch(err => console.log(err).then(message.channel.send("There was an issue removing the member role.")));
  message.channel.send('You have muted '  +  mentionedMember.user.tag )
  }
}