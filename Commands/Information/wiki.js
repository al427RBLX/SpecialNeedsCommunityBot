const fetch = require('node-fetch');

module.exports = {
    name: 'wiki',
    aliases: [],
    category: 'Information',
    usage: '',
    description: 'Command Used to Request Information from Wikipedia to the Special Needs Community Bot.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        const body = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(args.join (" "))}`)
        .then(res => res.json().catch(() => {}));
        if (!body)
        return msg.channel.send(embed).then
        (msg => msg.delete({timeout: 6000}));
        if (body.title && body.title === "Not Found.")
        return msg.channel.send(embed1).then
        (msg => msg.delete({timeout: 6000}));

        const embed2 = new Discord.MessageEmbed()
        .setTitle(`🌐 📖 Wikipedia Results:\n\n${body.title}`)
        .addField(
            'More Info:',
            `**[Click Here](${body.content_urls.desktop.page})**`,
            true
        )
        .setDescription(`** ${body.extract} **`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        if (body.thumbnail) embed2
        .setThumbnail(body.thumbnail.source);
        msg.channel.send(embed2)
    }
};