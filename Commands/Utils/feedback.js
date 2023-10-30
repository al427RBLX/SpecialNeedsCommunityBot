module.exports = {
    name: 'feedback',
    aliases: [],
    category: 'Utils',
    usage: '',
    permissions: ['SEND_MESSAGES'],
    description: 'Command Used to Send a Suggestion.',
    execute(msg, args, cmd, client, Discord) {
        const channel = msg.guild.channels.cache.find(c => c.name === 'feedback');
        const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        if(!channel) return msg.channel.send(embed1).then
        (msg => msg.delete({timeout: 6000}));

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((message) => {
            message.react('👍');
            message.react('👎');
            msg.delete();
        }).catch((err) => {
            throw err;
        });
    }
}
