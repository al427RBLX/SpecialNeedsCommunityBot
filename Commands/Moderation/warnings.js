const db = require('../../models/warns');

module.exports = {
    name: 'warnings',
    aliases: [],
    category: 'Moderation',
    usage: '',
    description: 'Command used to Show a User\'s Warnings.',
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
        if(!user) return msg.channel.send(embed).then
        (msg => msg.delete({timeout: 6000}));
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: msg.guild.id, user: user.user.id}, async (err, data) => {
            if(err) throw err;
            if(data) {
                msg.channel.send(new Discord.MessageEmbed()
                .setTitle(`${user.user.tag}'s Warnings`)
                .setColor("BLACK")
                .setFooter('Powered by Special Needs Community')
                .setTimestamp()
                .setDescription(
                    data.content.map(
                        (w, i) =>
                        `\`${i + 1}\` | Moderator: ${msg.guild.members.cache.get(w.moderator).user.tag}\nReason: ${w.reason}`
                    )
                  )
                )
            } else {
                msg.channel.send(embed).then
                (msg => msg.delete({timeout: 6000}));
            }
        });
    }
}