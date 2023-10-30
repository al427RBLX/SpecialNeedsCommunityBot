module.exports = {
    name: 'faq',
    aliases: [],
    category: 'Utils',
    usage: '',
    description: 'Frequently Asked Questions (FAQ) in Special Needs Community.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Frequently Asked Questions (FAQ)')
        .setDescription(`**How I can verify myself with Special Needs Community Bot?**
When you join our Discord Server our Bot auto DMs you with our Bot captcha system.

**I find a bug on Special Needs Community Bot, who I can contact?**
Please report to Bot Development Team. Please note you need video Evidence of the bug so we can investigate and fix the bug.

**How I can open a Ticket with Special Needs Community Bot?**
You can go to our Support Channel, and type '?ticket' one of our Support Team Members will be with you.

Note
If we find any Evidence of you breaking our Community Guidelines in our all channels our Administration will take ACTION the right way.

**Why does Special Needs Community Bot keep going down?**
Is inpending's on our server the down as or app crashed, we can't fix this problem is not in our control. If we notice our Bot not online, we will try to  get Bot online fast as we can.

**Why does Special Needs Community Bot not respawn to my commands?**
The bot might be down or the command is not in our bot system.

**How I can report a Special Needs Community Employee?**
Report to Special Needs Community Board of Director+. you must need Evidenced of the Employee breaking Special Needs Community Policies or Community Guidelines.

**How I can get in contact with the Chief Executive Officer of Special Needs Community LLC?**
Please contact the Chief Operating Officer of Special Needs Community LLC, to get in contact with the Chief Executive Officer of Special Needs Community LLC, or Please open a Ticket to Contact the Chief Executive Officer of Special Needs Community LLC.

**How do I Partnership with Special Needs Community LLC?** 
Please fill Partnership Application, please wait until Special Needs Community Partnership Program employee contacts you about your application. Please make sure your group Partnership Requirements, if any Partnership with not enough of our Requirements is declined the application.

More FAQs are coming soon! `)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        msg.channel.send(embed).then
    },
};
