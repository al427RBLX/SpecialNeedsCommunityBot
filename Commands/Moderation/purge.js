module.exports = {
    name: 'purge',
    aliases: [],
    category: 'Moderation',
    usage: '',
    description: 'Command Used to Purge Messagess.',
    permissions: ['ADMINISTRATOR', 'MANAGE_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
       .setTitle('Bot Message')
       .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
       .setColor("BLACK")
       .setFooter('Powered by Special Needs Community')
       .setTimestamp();
        if(!args[0]) return msg.reply(embed).then
        (msg => msg.delete({timeout: 6000}));
        if(isNaN(args[0])) return msg.reply(embed).then
        (msg => msg.delete({timeout: 6000}));
        
        if(args[0] > 100) return msg.reply(embed).then
        (msg => msg.delete({timeout: 6000}));
        if(args[0] < 1) return msg.reply(embed).then
        (msg => msg.delete({timeout: 6000}));

        await msg.channel.messages.fetch({limit: args[0]}).then(s => {
            const embed = new Discord.MessageEmbed()
            .setTitle('Bot Message')
           .setDescription(`Deleted ${args} Messages.`)
           .setColor("BLACK")
           .setFooter('Powered by Special Needs Community')
            .setTimestamp();
            msg.channel.bulkDelete(s);
            msg.channel.send(embed).then
            (msg => msg.delete({timeout: 6000}));
        });
    }
}