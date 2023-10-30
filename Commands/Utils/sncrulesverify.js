const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
    name: 'sncrulesverify',
    aliases: [],
    category: 'Utils',
    usage: '',
    description: 'Command used to Request the Special Needs Community Development Reaction Roles Buttons.',
    permissions: ['ADMINISTRATOR'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle("Special Needs Community Guidelines & Policy Verification")
        .setColor("BLACK")
        .setDescription("Receive or Get an Unique and Special Role, and by Reacting, you Promise to Abide to all the Special Needs Community Guidelines & Policy at any Coasts, and aswell taking the Consequences to Rules or Guidelines, you Do Not Follow or Comply with.")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        const addReaction = new MessageButton()
        .setStyle("green")
        .setLabel("Add")
        .setID("AddAgreedToSpecialNeedsCommunityGuidelinesRole")

        const removeReaction = new MessageButton()
        .setStyle("red")
        .setLabel("Remove")
        .setID("RemoveAgreedToSpecialNeedsCommunityGuidelinesRole")

        const row = new MessageActionRow()
        .addComponent([addReaction, removeReaction])

        msg.channel.send({component: row, embed: embed})
    }
}
