const ms = require('ms')

module.exports = {
    name: 'mute',
    aliases: [],
    category: 'Moderation',
    usage: '',
    description: 'Command used to Mute Members.',
    permissions: ['ADMINISTRATOR'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const target = msg.mentions.users.first();
       const embed3 = new Discord.MessageEmbed()
       .setTitle('Bot Message')
       .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
       .setColor("BLACK")
       .setFooter('Powered by Special Needs Community')
       .setTimestamp();
        if(target) {
           let mainRole = msg.guild.roles.cache.find(role => role.id === '1019679300108156938');
           let muteRole = msg.guild.roles.cache.find(role => role.id === '1019679300108156938');

           let memberTarget = msg.guild.members.cache.get(target.id);

           if(!args[1]) {
            const embed = new Discord.MessageEmbed()
            .setTitle('Bot Message')
            .setDescription(`<@${memberTarget.user.id}> has been muted.`)
            .setColor("BLACK")
            .setFooter('Powered by Special Needs Community')
            .setTimestamp();
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            msg.channel.send(embed).then
            (msg => msg.delete({timeout: 6000}));
            return
           }
           memberTarget.roles.remove(mainRole.id);
           memberTarget.roles.add(muteRole.id);
           const embed1 = new Discord.MessageEmbed()
           .setTitle('Bot Message')
            .setDescription(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}.`)
            .setColor("BLACK")
            .setFooter('Powered by Special Needs Community')
            .setTimestamp();
           msg.channel.send(embed1).then
           (msg => msg.delete({timeout: 6000}));

           setTimeout(function () {
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Bot Message')
            .setDescription(`<@${memberTarget.user.id}> has been unmuted.`)
            .setColor("BLACK")
            .setFooter('Powered by Special Needs Community')
            .setTimestamp();
           memberTarget.roles.add(muteRole.id);
           memberTarget.roles.add(mainRole.id);
           msg.channel.send(embed2).then
           (msg => msg.delete({timeout: 6000}))
           }, ms(args[1]));
        } else {
            msg.channel.send(embed3).then
            (msg => msg.delete({timeout: 6000}));
        }
    }
}
