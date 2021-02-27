const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super('meme', 'Fun', []);
  }

  async run(client, message, args) {
    fetch('https://meme-api.herokuapp.com/gimme')
      .then(res => res.json())
      .then(async json => {
        const memeEmbed = new Discord.MessageEmbed()
        .setTitle(json.title)
        .setImage(json.url)
        .setFooter(`${json.subreddit} ${json.postlink}`);
        
        let msg = await message.channel.send('Fetching you a meme...');
        msg.edit(memeEmbed);
      });
  }
}