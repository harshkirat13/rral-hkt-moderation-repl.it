const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class NicknameCommand extends BaseCommand {
  constructor() {
    super('nickname', 'Mod', []);
  }

  async run(client, message, args) {
    //-nickname @user nickName
    //Permission CHecking;
    if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.channel.send("You cannot use this command.");
    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("I require \`MANEGE_NICKNAMES\` permission to change nicknames.");

    //Variables:
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const nickName = args.slice(1).join(" ");

    //Input Checking:
    if (!args[0]) return message.channel.send("You must state a user to nickname.");
    if (!mentionedMember) return message.channel.send("THe member stated is not in the server.");
    if (!nickName) return message.channel.send("You must state a nickname.");
    if (!mentionedMember.kickable) return message.channel.send("I cannot change that members nickname due to their role being higher than mine.");

    //Executing:
    await mentionedMember.setNickname(nickName).catch(err => console.log(err) && message.channel.send("Hey i cannot add that nickname due to an error make sure that the nickname is at most 32 characters."));
     message.channel.send('Nickname was changed')

  }
}