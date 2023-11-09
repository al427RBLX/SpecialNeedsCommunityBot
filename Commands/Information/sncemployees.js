module.exports = {
    name: 'sncemployees',
    aliases: [],
    category: 'Information',
    usage: '',
    description: 'Official Employees of Special Neeeds Community LLC.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Official Special Needs Community LLC Employees')
        .setDescription(`**Alex A**
        Chief Executive Officer of Special Needs Community LLC (Owner/Founder)
        
        **Charles T**
        Board of Director of Special Needs Community LLC (Co-Owner/Co-Founder)

        **Freddie B**
        Board of Director of Special Needs Community LLC

        **Jazmin C**
        Board of Director of Special Needs Community LLC
        
        **Jordan G**
        Board of Director of Special Needs Community LLC
        
        **Kelly S**
        Board of Director of Special Needs Community LLC`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        msg.channel.send(embed).then
    },
};
