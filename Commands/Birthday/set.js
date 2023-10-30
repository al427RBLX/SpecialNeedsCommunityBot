const Schema = require('../../models/birthday')

module.exports = {
    name: 'set',
    aliases: [],
    category: 'Birthday',
    usage: '',
    description: 'Command Used to Set a User Birthday.',
    permissions: [],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
        const months = {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December",
        };

        const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        const joined = args.join(" ");
        const split = joined.trim().split("/");

        let [ month, day ] = split;

        if(!day) return msg.reply(embed).then
        (msg => msg.delete({timeout: 6000}));
        if(!month) return msg.reply(embed).then
        (msg => msg.delete({timeout: 6000}));

        if(isNaN(day) || isNaN(month)) return msg.reply(embed).then
        (msg => msg.delete({timeout: 6000}));

        month = parseInt(month);
        day = parseInt(day);

        if(!day || day > 31) return msg.reply(embed).then
        (msg => msg.delete({timeout: 6000}));
        if(!month || month > 12) return msg.reply(embed).then
        (msg => msg.delete({timeout: 6000}));
        const convertedMonth = months[month]
        const convertedDay = suffixes(day);
        const birthdayString = `${convertedMonth}, ${convertedDay}`
        const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`Saved ${convertedMonth}, ${convertedDay}.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        Schema.findOne({ User: msg.author.id }, async(err, data) => {
            if (data) {
                data.Birthday = birthdayString;
                data.save();
            } else {
                new Schema({
                    User: msg.author.id,
                    Birthday: birthdayString,
                }).save();
            }
        });
        msg.channel.send(embed1).then
        (msg => msg.delete({timeout: 6000}));
    },
};

function suffixes(number) {
    const converted = number.toString();
    const lastChar = converted.charAt(converted.length - 1);

    return lastChar == '1' 
    ? `${converted}st`
    : lastChar == '2'
    ? `${converted}nd`
    : lastChar == '3'
    ? `${converted}rd`
    : `${converted}th`;
}