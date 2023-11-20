module.exports = {
    name: 'whatwedo',
    aliases: [],
    category: 'Information',
    usage: '',
    description: 'Special Needs Community What We Do Information.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Special Needs Community What We Do')
        .setDescription(`This Information is coming soon.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        msg.channel.send(embed).then
  },
};
