module.exports = {
    name: 'ping',
    aliases: [],
    category: 'General',
    usage: '',
    description: 'Command used to Request the Ping.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        msg.channel.send(embed).then
        (msg => msg.delete({timeout: 6000}));
    },
};
