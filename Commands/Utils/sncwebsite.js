const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
    name: 'sncwebsite',
    aliases: ['website'],
    category: 'Utils',
    usage: '',
    description: 'Special Needs Community Official Websites',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Official Special Needs Community Websites')
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        
        const addlinkingbutton = new MessageButton()
        .setStyle("url")
        .setLabel("Official Website of Special Needs Community!")        .setURL("https://specialneedscommunity.alexallen4.repl.co")
      
        const linkingbutton = new MessageButton()
        .setStyle("url")
        .setLabel("Official LinkTree of Special Needs Community!")
        .setURL("https://linktr.ee/SpecialNeedsCommunity")
        
        const row = new MessageActionRow()
        .addComponent([addlinkingbutton, linkingbutton])
        
        msg.channel.send({component: row, embed: embed})
    },
};
