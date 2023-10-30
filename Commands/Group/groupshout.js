const rbxbot = require('noblox.js');

module.exports = {
    name: 'groupshout',
    aliases: [],
    category: 'Group',
    usage: '',
    description: 'Command used to Make a Group Shout to ROBLOX from Discord.',
    permissions: ['ADMINISTRATOR'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const shoutmsg = msg.content.slice(',groupshout'.length)
        const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('Group Shout Successfully Sent!')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        if(!shoutmsg) return msg.reply(embed).then
        (msg => msg.delete({timeout: 6000}));

        rbxbot.shout({ group: process.env.GROUPID, message: shoutmsg })
        .then(() => {
            msg.reply(embed1).then
            (msg => msg.delete({timeout: 6000}));
        })

        .catch((err) => {
            msg.reply(err.message)
        })
    }
}