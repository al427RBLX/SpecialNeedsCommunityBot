module.exports = {
    name: 'aboutus',
    aliases: [],
    category: 'Information',
    usage: '',
    description: 'Special Needs Community About US Information.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Official Special Needs Community About Us')
        .setDescription(`Special Needs Community is a Non-Profit Organization created on September 19th, 2020, hoping to make a better future for the world. We are also trying to raise a voice in this world to let everyone have more awareness about disabilities and special needs. Our goal is to make sure that everyone in this community feels comfortable, happy, and included. We want to bring change and hope into people's lives.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        msg.channel.send(embed).then
  },
};
