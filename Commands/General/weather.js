const weather = require('weather-js');
module.exports = {
    name: 'weather',
    aliases: [],
    category: 'General',
    usage: '',
    description: 'Command used to Request the Weather.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        weather.find({search: args.join(" "), degreeType: `C`}, function (error, result) {
          const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
          if(error) return msg.channel.send(embed1).then
          (msg => msg.delete({timeout: 6000}));
          if(!args[0]) return msg.channel.send(embed1).then
          (msg => msg.delete({timeout: 6000}));

          if(result === undefined || result.length === 0) return msg.channel.send(embed1).then
          (msg => msg.delete({timeout: 6000}));

          var current = result[0].current;
          var location = result[0].location;

          const embed = new Discord.MessageEmbed()
          .setColor('BLACK')
          .setAuthor(`Weather Forecast for ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .addField('Timezone', `UTC ${location.timezone}`, true)
          .addField('Weather', `${current.skytext}`, true)
          .addField('Degree Type', 'Celcius', true)
          .addField('Temperature', `${current.temperature}°C`, true)
          .addField('Wind Speed', `${current.winddisplay}`, true)
          .addField('Feels Like', `${current.feelslike}°C`, true)
          .addField('Humidity', `${current.humidity}%`, true)
          .addField('Observation Time', `${current.observationtime}`, true)
          .setFooter('Powered by Special Needs Community')
          .setTimestamp();

          msg.channel.send(embed)
        })
    }
}