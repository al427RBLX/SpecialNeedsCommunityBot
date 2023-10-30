module.exports = {
    name: 'bans',
    aliases: [],
    category: 'Moderation',
    usage: '',
    description: 'Command used to Show all the Banned Members.',
    permissions: ['ADMINISTRATOR'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
        const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
         .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
         .setColor("BLACK")
         .setFooter('Powered by Special Needs Community')
         .setTimestamp();
        const fetchBans = msg.guild.fetchBans();
        const bannedMembers = (await fetchBans)
        .map((member) => `\`${member.user.tag}\``)
        .join(" ");
        if(!bannedMembers) return msg.channel.send(embed1).then
        (msg => msg.delete({timeout: 6000}));

        const embed = new Discord.MessageEmbed()
       .setTitle('Banned Members')
        .setDescription(bannedMembers)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        msg.channel.send(embed)
    }
}