const Schema = require('../../models/birthday')

module.exports = {
    name: 'check',
    aliases: [],
    category: 'Birthday',
    usage: '',
    description: 'Command used to Check a User Birthday.',
    permissions: [],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
        const user = msg.mentions.users.first() || msg.author;

        Schema.findOne({ User: user.id }, async(err, data) => {
        const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`${user} Birthday is on ${data.Birthday}.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
            if(!data) return msg.reply(embed).then
            (msg => msg.delete({timeout: 6000}));
            msg.channel.send(embed1).then
            (msg => msg.delete({timeout: 6000}));
        });
    }
}