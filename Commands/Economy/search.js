const profileModel = require('../../models/profileSchema');
module.exports = {
    name: 'find',
    aliases: [],
    category: 'Economy',
    usage: '',
    description: 'Command used to Search.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord, profileData) {
        const location = [
            "Special Needs Community Headquarters",
            "Special Needs Community Geneva Office",
            "Special Needs Community Nairobi Office",
            "Special Needs Community Vienna Office"
        ];

    const chosenLocations = location.sort(() => Math.random() - Math.random()).slice(0, 3);

    const filter = ({ author, content }) => msg.author == author && chosenLocations.some((location) => location.toLowerCase() === content.toLowerCase());

    const collector = msg.channel.createMessageCollector(filter, { max: 1, time: 25000 });

    const earnings = Math.floor(Math.random() * (1000000000000 - 0 + 1)) + 0;

    const embed = new Discord.MessageEmbed()
    .setTitle('Bot Message')
    .setDescription('You ran out of time!')
    .setColor("BLACK")
    .setFooter('Powered by Special Needs Community')
    .setTimestamp();

    const embed1 = new Discord.MessageEmbed()
    .setTitle('Bot Message')
    .setDescription(`You found ${earnings} USD.`)
    .setColor("BLACK")
    .setFooter('Powered by Special Needs Community')
    .setTimestamp();

    const embed2 = new Discord.MessageEmbed()
    .setTitle('Bot Message')
    .setDescription(`<@${msg.author.id}> Which location would you like to search?\n Type the Location in this Channel\n \`${chosenLocations.join(' ')}\``)
    .setColor("BLACK")
    .setFooter('Powered by Special Needs Community')
    .setTimestamp();

    collector.on('collect', async (m) => {
        msg.channel.send(embed1).then
        (msg => msg.delete({timeout: 6000}));

        await profileModel.findOneAndUpdate({
            userID: msg.author.id,
        },
        {
            $inc: {
                money: earnings,
            }
        });
    });

    collector.on('end', (collected, reason) => {
        if(reason == "time") {
            msg.channel.send(embed).then
            (msg => msg.delete({timeout: 6000}));
        }
    });

    msg.channel.send(embed2);
    }
}