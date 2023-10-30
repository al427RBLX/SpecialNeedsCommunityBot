const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
    name: 'sncbotverify',
    aliases: [],
    category: 'Utils',
    usage: '',
    description: 'Command used to Request the Special Needs Community Bot Verification Reaction Roles Buttons.',
    permissions: ['ADMINISTRATOR'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle("> 🤖 **Special Needs Community Bot Verification**")
        .setColor("BLACKK")
        .setDescription("**Perks/Features:** Get Verified, and Get Another Role, also showing you did the Real Verification, the Real Verification comes from the Special Needs Community Bot, and It's the Legitimate Verification since It's created and developed by the Special Needs Community. This Role, is gotten when you join and the Bot will DM you, a Captcha Verification, where you will need to give Correctly the Captcha or Answer it, or else the Bot will kick you, after 5 Minutes for not Answering or not giving the Correct Captcha.")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        const addReaction = new MessageButton()
        .setStyle("green")
        .setLabel("Add")
        .setID("AddBotVerificationRole")

        const removeReaction = new MessageButton()
        .setStyle("grey")
        .setLabel("Remove")
        .setID("RemoveBotVerificationRole")

        const row = new MessageActionRow()
        .addComponent([addReaction, removeReaction])

        msg.channel.send({component: row, embed: embed})
    }
}
