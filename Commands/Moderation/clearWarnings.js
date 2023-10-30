const db = require('../../models/warns');

module.exports = {
    name: 'clear-all-warnings',
    aliases: [],
    category: 'Moderation',
    usage: '',
    description: 'Command used to Clear All User Warning(s).',
    permissions: ['ADMINISTRATOR'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
        const user = msg.mentions.members.first() || msg.guild.members.cache.get(args[0])
        const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
         .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
         .setColor("BLACK")
         .setFooter('Powered by Special Needs Community')
         .setTimestamp();
         const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
         .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
         .setColor("BLACK")
         .setFooter('Powered by Special Needs Community')
         .setTimestamp();
         const embed2 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
         .setDescription('Cleared User Warnings.')
         .setColor("BLACK")
         .setFooter('Powered by Special Needs Community')
         .setTimestamp();
        if(!user) return msg.channel.send(embed).then
        (msg => msg.delete({timeout: 6000}));
        db.findOne({ guildid: msg.guild.id, user: user.user.id}, async (err, data) => {
            if(err) throw err;
            if(data) {
                await db.findOneAndDelete({ user: user.user.id, guildid: msg.guild.id })
                msg.channel.send(embed2).then
                (msg => msg.delete({timeout: 6000}));
            } else {
                msg.channel.send(embed1).then
                (msg => msg.delete({timeout: 6000}));
            }
        })
    }
}