const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SetupmuteCommand extends BaseCommand {
  constructor() {
    super('setupmute', 'Mod', []);
  }

  run(client, message, args) {
    message.channel.send('setupmute command works');
  }
}