module.exports = {
    name: 'balance',
    aliases: ['bal','bl'],
    category: 'Economy',
    usage: '',
    description: 'Command used for Balance.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord, profileData) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`Your Wallet Balance is ${profileData.money} **USD**, Your Bank Account Balance is ${profileData.bank} **USD**.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        msg.channel.send(embed).then
        (msg => msg.delete({timeout: 6000}));
    },
}