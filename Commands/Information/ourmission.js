module.exports = {
    name: 'ourmission',
    aliases: [],
    category: 'Information',
    usage: '',
    description: 'Special Needs Community Our Mission Information.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Official Special Needs Community Our Mission')
        .setDescription(`Special Needs Community is aimed to fight stereotypes and discrimination against special needs and disabled people. We hope to raise a single voice in the world to raise awareness for these specific people, and we do that by donating money to charities that support and also help special needs and disabled people, or by donating daily necessities, such as: food, clothes, etc.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        msg.channel.send(embed).then
  },
};