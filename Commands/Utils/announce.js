module.exports = {
    name: 'announce',
    aliases: ['ac'],
    category: 'Utils',
    usage: '',
    description: 'Command used to make an Announcement.',
    permissions: ['ADMINISTRATOR'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        if (!args.length) return msg.channel.send(embed1).then
        (msg => msg.delete({timeout: 6000}));

        const channel = msg.mentions.channels.first();
        if(!channel) return msg.reply(embed1).then
        (msg => msg.delete({timeout: 6000}));

        if(!args[1]) return msg.reply(embed1).then
        (msg => msg.delete({timeout: 6000}));

        if (args.some((val) => val.toLowerCase() === '-ping')) {
            for (let i = 0; i < args.length; i++ ) {
                if(args[1].toLowerCase() === '-ping') args.splice(i, 1);
            }

            mention = true;
        } else mention = false;

        if(mention === true) channel.send('||@everyone||');

        channel.send(
            new Discord.MessageEmbed()
            .setTitle('Special Needs Community Bot Announcement')
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true }))
            .setFooter('Powered by Special Needs Community')
            .setDescription(args.slice(1).join(' '))
            .setTimestamp()
            .setColor('BLACK')
        )
    }
}