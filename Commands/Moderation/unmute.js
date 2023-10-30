module.exports = {
    name: 'unmute',
    aliases: [],
    category: 'Moderation',
    usage: '',
    description: 'Command used to Unmute Members.',
    permissions: ['ADMINISTRATOR'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const target = msg.mentions.users.first();
       const embed1 = new Discord.MessageEmbed()
       .setTitle('Bot Message')
       .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
       .setColor("BLACK")
       .setFooter('Powered by Special Needs Community')
       .setTimestamp();
        if(target) {
           let mainRole = msg.guild.roles.cache.find(role => role.id === '1019679300108156938');
           let muteRole = msg.guild.roles.cache.find(role => role.id === '1019679300108156938');

           let memberTarget = msg.guild.members.cache.get(target.id);
           const embed = new Discord.MessageEmbed()
       .setDescription(`<@${memberTarget.user.id}> has been unmuted.`)
       .setColor("BLACK")
       .setFooter('Powered by Special Needs Community')
       .setTimestamp();

           memberTarget.roles.remove(muteRole.id);
           memberTarget.roles.remove(mainRole.id);
           msg.channel.send(embed).then
           (msg => msg.delete({timeout: 6000}));
        } else {
            msg.channel.send(embed1).then
            (msg => msg.delete({timeout: 6000}));
        }
    }
}
