const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
    name: 'mentalhealth',
    aliases: [],
    category: 'Information',
    usage: '',
    description: 'Mental Health Resources information',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Official Mental Health Information')
        .setDescription(`Mental health encompasses emotional, psychological, and social well-being, influencing cognition, perception, and behavior. It also determines how an individual handles stress, interpersonal relationships, and decision-making. Mental health includes subjective well-being, perceived self-efficacy, autonomy, competence, intergenerational dependence, and self-actualization of one's intellectual and emotional potential, among others. From the perspectives of positive psychology or holism, mental health may include an individual's ability to enjoy life and to create a balance between life activities and efforts to achieve psychological resilience. Cultural differences, subjective assessments, and competing professional theories all affect how one defines "mental health". Some early signs related to mental health problems are sleep irritation, lack of energy and thinking of harming yourself or others.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        
        const addlinkingbutton = new MessageButton()
        .setStyle("url")
        .setLabel("Official Mental Health America!")
        .setURL("https://mhanational.org/")
        
        const linkingbutton = new MessageButton()
        .setStyle("url")
        .setLabel("Official National Institute of Mental Health!")
        .setURL("https://www.nimh.nih.gov/health")
         
        const row = new MessageActionRow()
        .addComponent([addlinkingbutton, linkingbutton])
        
        msg.channel.send({component: row, embed: embed})
    },
};
