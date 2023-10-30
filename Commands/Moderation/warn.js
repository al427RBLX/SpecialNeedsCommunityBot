const db = require('../../models/warns');

module.exports = {
    name: 'warn',
    aliases: [],
    category: 'Moderation',
    usage: '',
    description: 'Command used to Warn a User.',
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
            if(!data) {
               data = new db({
                   guildid : msg.guild.id,
                   user : user.user.id,
                   content : [
                       {
                           moderator : msg.author.id,
                           reason : reason
                       }
                   ]
               })
            } else {
                const obj = {
                    moderator : msg.author.id,
                    reason : reason
                }
                data.content.push(obj)
            }
            data.save()
        });
        user.send(new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`You have Been Warned for ${reason} in the **Special Needs Community** Discord Server.`)
        .setColor("RED")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp()
        )
        msg.channel.send(new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`Warned ${user} for ${reason}.`)
        .setColor('BLACK')
        .setFooter('Powered by Special Needs Community')
         .setTimestamp()
        ).then
        (msg => msg.delete({timeout: 6000}));
    }
}