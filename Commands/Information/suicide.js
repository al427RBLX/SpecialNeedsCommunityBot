const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
    name: 'suicide',
    aliases: [],
    category: 'Information',
    usage: '',
    description: 'Suicide Resources information',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Official Suiicide Information')
        .setDescription(`Suicide is death caused by injuring oneself with the intent to die. A suicide attempt is when someone harms themselves with any intent to end their life, but they do not die as a result of their actions, many factors can increase the risk for suicide or protect against it.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        
        const addlinkingbutton = new MessageButton()
        .setStyle("url")
        .setLabel("Official 988 Suicide & Crisis Lifeline Website!")
        .setURL("https://988lifeline.org/")
        
        const linkingbutton = new MessageButton()
        .setStyle("url")
        .setLabel("How to Prevent Someone Suicide!")
        .setURL("https://988lifeline.org/how-we-can-all-prevent-suicide/")
         
        const row = new MessageActionRow()
        .addComponent([addlinkingbutton, linkingbutton])
        
        msg.channel.send({component: row, embed: embed})
    },
};
