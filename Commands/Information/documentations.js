const axios = require('axios')
module.exports = {
    name: 'documentations',
    aliases: ["docs"],
    category: 'Information',
    usage: '',
    description: 'Command used to Request the Discord.js Documentations.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        const query = args.join(" ");
        if(!query) return msg.reply(embed)
        const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`;

        axios.get(url).then(({ data }) => {
            if(data) {
                msg.channel.send({ embed: data });
            }
        });
    },
};