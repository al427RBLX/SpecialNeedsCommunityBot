const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
    name: 'sncdvudt',
    aliases: [],
    category: 'Utils',
    usage: '',
    description: 'Command used to Request the Special Needs Community Development Reaction Roles Buttons.',
    permissions: ['ADMINISTRATOR'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle("Special Needs Community Development Ping Role")
        .setColor("BLACK")
        .setDescription("**Perks/Features:** Updates or Chanages on Special Needs Community Development.")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        const addReaction = new MessageButton()
        .setStyle("green")
        .setLabel("Add")
        .setID("AddDevelopmentPingRole")

        const removeReaction = new MessageButton()
        .setStyle("red")
        .setLabel("Remove")
        .setID("RemoveDevelopmentPingRole")

        const row = new MessageActionRow()
        .addComponent([addReaction, removeReaction])

        msg.channel.send({component: row, embed: embed})
    }
}
