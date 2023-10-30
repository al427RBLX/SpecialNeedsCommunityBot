const request = require("node-superfetch")
module.exports = {
    name: 'country',
    aliases: [],
    category: 'General',
    usage: '',
    description: 'Command used to Request a Country\'s Information.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
      const query = args[0];
      const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        if (!query) return msg.channel.send(embed1).then
        (msg => msg.delete({timeout: 6000}));
        const { body } = await request.get(`https://restcountries.eu/rest/v2/name/${query}`);

        const data = body[0];
        let embed = new Discord.MessageEmbed()
        .setTitle(data.name)
        .setThumbnail(`https://www.countryflags.io/${data.alpha2Code}/flat/64.png`)
        .addFields(
            {
              name: "👩‍🚀 Population",
              value: `\`${data.population}\``,
              inline: true
            },
            {
              name: "📍 Capital",
              value: `\`${data.capital || "No capital available!"}\``,
              inline: true
            },
            {
              name: "💰 Currency",
              value: `\`${data.currencies[0].symbol}\``,
              inline: true
            },
            {
              name: "🗺️ Location",
              value: `\`${data.subregion || data.region}\``,
              inline: true
            },
            {
              name: "🏷️ Origin Title",
              value: `\`${data.nativeName || "No origin title available!"}\``,
              inline: true
            },
            { name: "📏 Size", value: `\`${data.area}\`km`, inline: true },
            {
              name: "✏️ Languages",
              value: data.languages
                .map(language => `\`${language.name}\``)
                .join("\n"),
              inline: true
            }
          )
          .setColor('BLACK')
          .setFooter('Powered by Special Needs Community')
          .setTimestamp();
        return msg.channel.send(embed);
    }
}