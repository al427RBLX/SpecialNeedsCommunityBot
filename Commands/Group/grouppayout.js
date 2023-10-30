const rbxbot = require('noblox.js');

module.exports = {
    name: 'grouppayout',
    aliases: [],
    category: 'Group',
    usage: '',
    description: 'Command used to Make a Group Payout to a ROBLOX Username from Discord.',
    permissions: ['ADMINISTRATOR'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
        const robloxname = args[1]
        const robux = Number.parseInt(args[2])
        const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, No Robux Left In Group Funds! ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`Successfully Paid ${robux} Robux to ${robloxname}`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        if(Number.isNaN(robux)) return msg.reply(embed).then
        (msg => msg.delete({timeout: 6000}));

        await rbxbot.getIdFromUsername(robloxname)
        .then((robloxid) => {
            rbxbot.groupPayout({ group: process.env.GROUPID, member: robloxid, amount: robux })
            .then(() => {
                msg.reply(embed1).then
                (msg => msg.delete({timeout: 6000}));
            })
            .catch((err) => {
                console.log(err)
            })
        })

    }
}