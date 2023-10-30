const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
    name: 'bugreport',
    aliases: [],
    category: 'Utils',
    usage: '',
    description: 'Description Coming Soon.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Official Special Needs Community Game Report From')
        .setDescription(`Description Coming Soon.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        
        const addlinkingbutton = new MessageButton()
        .setStyle("url")
        .setLabel("Official Bug Repurt From")
        .setURL("https://forms.gle/xYN5hcFjhZjw2oaz8")
         
        const row = new MessageActionRow()
        .addComponent([addlinkingbutton])
        
        msg.channel.send({component: row, embed: embed})
    },
};
