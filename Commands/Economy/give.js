const profileModel = require('../../models/profileSchema');
module.exports = {
    name: 'give',
    aliases: [],
    category: 'Economy',
    usage: '',
    description: 'Command used to Give.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord, profileData) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        if(!args.length) return msg.channel.send(embed).then
        (msg => msg.delete({timeout: 6000}));
        const amount = args[1];
        const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`You Gave ${amount} USD to another User.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        const target = msg.mentions.users.first();
        if (!target) return msg.channel.send(embed).then
        (msg => msg.delete({timeout: 6000}));

        if(amount % 1 != 0 || amount <= 0) return msg.channel.send(embed).then
        (msg => msg.delete({timeout: 6000}));
        
        try {
             const targetData = await profileModel.findOne({ userID: target.id });
             if(!targetData) return msg.channel.send(embed).then
             (msg => msg.delete({timeout: 6000}));

             await profileModel.findOneAndUpdate(
            {
                 userID: target.id
            },
            {
                 $inc: {
                     money: amount,
                 },
             }
            );

        return msg.channel.send(embed1).then
        (msg => msg.delete({timeout: 6000}));
        } catch(err) {
            console.log(err)
        }
    },
};