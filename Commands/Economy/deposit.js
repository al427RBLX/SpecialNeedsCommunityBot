const profileModel = require('../../models/profileSchema');
module.exports = {
    name: 'deposit',
    aliases: ['dep'],
    category: 'Economy',
    usage: '',
    description: 'Command used for Deposit.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord, profileData) {
    const amount = args[0];
    const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
    const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`You Deposited ${amount} USD from your Wallet into your Bank Account.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
    if(amount % 1 != 0 || amount <= 0) return msg.channel.send(embed).then
    (msg => msg.delete({timeout: 6000}));
    try {
        if (amount > profileData.money) return msg.channel.send(embed).then
        (msg => msg.delete({timeout: 6000}));
        await profileModel.findOneAndUpdate(
            {
                userID: msg.author.id
            },
            {
                $inc: {
                    money: -amount,
                    bank: amount,
                },
            }
        );

        return msg.channel.send(embed1).then
        (msg => msg.delete({timeout: 6000}));
    } catch (err) {
        console.log(err);
    }
},
};