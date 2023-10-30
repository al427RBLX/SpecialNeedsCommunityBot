module.exports = {
    name: 'sncpartnershipprogram',
    aliases: [],
    category: 'Information',
    usage: '',
    description: 'Imformation About Special Needs Community LLC Partnership Program',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Official Special Needs Community Partnership Program Information')
        .setDescription(`Special Needs Community Foundation, Information is coming soon.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        msg.channel.send(embed).then
    },
};