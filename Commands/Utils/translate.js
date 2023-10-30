const translate = require('@iamtraction/google-translate')
module.exports = {
    name: 'translate',
    aliases: [],
    category: 'Utils',
    usage: '',
    description: 'Command used to Translate.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
      const txt = args.slice(1).join(' ')
      const lang = args[0]
      const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
      if(!lang) return msg.channel.send(embed1).then
      (msg => msg.delete({timeout: 6000}));

      if(!txt) return msg.channel.send(embed1).then
      (msg => msg.delete({timeout: 6000}));
      translate(txt, { to: lang }).then(res => {
          const embed = new Discord.MessageEmbed()
         .setTitle('Special Needs Community Bot Translator')
         .setDescription(res.text)
         .setColor('BLACK')
         .setFooter('Powered by Special Needs Community')
         .setTimestamp()
         msg.channel.send(embed)
      }).catch(err => {
          msg.channel.send(embed1).then
            (msg => msg.delete({timeout: 6000}));
      });
    }
}