const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class RpsCommand extends BaseCommand {
  constructor() {
    super('rps', 'fun', []);
  }

  async run(client, message, args) {
    if (!args[0]) {
      return message.channel.send('Please include your choice(rock, paper, scissors)')
    }

    let choices = ['rock', 'paper', 'scissors'];
    if (choices.includes((args[0]).toLowerCase())) {
      let number = Math.floor(Math.random() * 3);
      if (number == 1) {
       return message.channel.send('It was a tie, We both had ' + (args[0]).toLowerCase())
    }
    if (number == 2) {
        if ((args[0]).toLowerCase() == "rock") {
          return message.channel.send('I won, I had paper.')
        }
        if ((args[0]).toLowerCase() == "paper") {
          return message.channel.send('I won, I had scissors.')
        }
        if ((args[0]).toLowerCase() == "scissors") {
          return message.channel.send('I won, I had Paper.')
      }  }
    if (number == 0) {
        if ((args[0]).toLowerCase() == "rock") {
          return message.channel.send('You won, I had scissors.')
        }
        if ((args[0]).toLowerCase() == "paper") {
          return message.channel.send('You won, I had rock.')
        }
        if ((args[0]).toLowerCase() == "scissors") {
          return message.channel.send('You won, I had Paper.')
        }
      }
    } else {
      return message.channel.send('Please include either: Rock, Paper, Scissors.')
    }
  }
}