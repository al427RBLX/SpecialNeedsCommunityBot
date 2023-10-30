module.exports = {
    name: 'ban',
    aliases: [],
    category: 'Moderation',
    usage: '',
    description: 'Command used to Ban Members.',
    permissions: ['ADMINISTRATOR'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
       const member = msg.mentions.users.first();
       const embed = new Discord.MessageEmbed()
       .setTitle('Bot Message')
        .setDescription('User has been banned.')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
       if(member) {
        const memberTarget = msg.guild.members.cache.get(member.id);
        memberTarget.ban();
        msg.channel.send(embed).then
        (msg => msg.delete({timeout: 6000}));
       } else {
           msg.channel.send(embed1).then
           (msg => msg.delete({timeout: 6000}));
       }
    }
}