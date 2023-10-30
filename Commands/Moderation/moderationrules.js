module.exports = {
    name: 'modrules',
    aliases: [],
    category: 'Moderation',
    usage: '',
    description: 'Official Moderation Rules of Special Needs Community..',
    permissions: ['ADMINISTRATOR'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Official Moderation Rules')
        .setDescription(`Coming Soon.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        msg.channel.send(embed).then
    },
};
