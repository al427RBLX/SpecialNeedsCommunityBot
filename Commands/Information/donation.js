const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
    name: 'donation',
    aliases: [],
    category: 'Information',
    usage: '',
    description: 'Special Needs Community Donation Information.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Official Special Needs Community Donation')
        .setDescription(`Description is coming soon.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        
        const addlinkingbutton = new MessageButton()
        .setStyle("url")
        .setLabel("Donate on Paypal to Special Needs Community!")
        .setURL("https://www.paypal.com/donate/?hosted_button_id=9JN7QXPXUNDGU")
        
        const linkingbutton = new MessageButton()
        .setStyle("url")
        .setLabel("Donate on LinkTree to Special Needs Community!")
        .setURL("https://linktr.ee/SpecialNeedsCommunity")
         
        const row = new MessageActionRow()
        .addComponent([addlinkingbutton, linkingbutton])
        
        msg.channel.send({component: row, embed: embed})
    },
};
