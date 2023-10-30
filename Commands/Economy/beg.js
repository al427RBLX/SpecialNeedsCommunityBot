const profileModel = require('../../models/profileSchema');
module.exports = {
    name: 'beg',
    aliases: [],
    category: 'Economy',
    usage: '',
    description: 'Command used for Beg.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord, profileData) {
        const randomNumber = Math.floor(Math.random() * 1000000000000) + 1;
        const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`${msg.author.username}, you Begged and Received ${randomNumber} **USD**.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        const response = await profileModel.findOneAndUpdate(
        {
            userID: msg.author.id,
        },
        {
            $inc: {
                money: randomNumber,
            },
        }
    );
        return msg.channel.send(embed).then
        (msg => msg.delete({timeout: 6000}));
    },
};