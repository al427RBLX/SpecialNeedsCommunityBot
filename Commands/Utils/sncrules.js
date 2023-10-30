const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
    name: 'sncrules',
    aliases: ['rules'],
    category: 'Utils',
    usage: '',
    description: 'Official Special Needs Community Guidelines & Policy of Special Needs Community.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Official Special Needs Community Guidelines & Policy')
        .setDescription(`***Rule A.1***:
• All Special Needs Community members must follow the Rules & Policies set by Special Needs Community.
- This also includes following Discord Policy.

***Rule A.B***:
• Bullying and harassment, on all levels, is prohibited.
- This includes leaking private information about other community member's.
- This also includes minor's(not 18+) too.

***Rule 1.C***:
• Use of excessive extreme inappropriate language is prohibited.
- Crussing is prohibited and is not allowed.
- We like to keep our community, welcoming community.

***Rule 1.D***:
• Working in Progress(W.I.P).

***Rule 2.A***:
• Working in Progress(W.I.P).
▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
***Special Needs Community Private Policy***
https://www.termsfeed.com/live/84912f26-4bf7-48cb-b07d-f85cbafe370f

***Special Needs Community Cookies Policy***
https://www.termsfeed.com/live/07fc0bce-9275-4403-98a4-abbd7840670e

***Special Needs Community Disclaimer Policy***
https://www.termsfeed.com/live/beb30e35-e7d5-4c08-94f8-5dc0f9515e2b

***Special Needs Community Terms & Conditions Policy***
https://www.termsfeed.com/live/7e6044d6-f2f3-4ade-aada-cd6200d1e736
▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
***Discord Private Policy***
https://discord.com/privacy

***Discord Community Guidelines***
https://discord.com/guidelines

***Discord Terms & Conditions***
https://discord.com/terms`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        
        const addlinkingbutton = new MessageButton()
        .setStyle("url")
        .setLabel("Join our Special Needs Community Facebook Group!")
        .setURL("https://www.facebook.com/groups/specialneedscommunit")
        
        const linkingbutton = new MessageButton()
        .setStyle("url")
        .setLabel("Join our Special Needs Community ROBLOX Group!")
        .setURL("https://www.roblox.com/groups/7810098/Special-Needs-Community#!/about")

         
        const row = new MessageActionRow()
        .addComponent([addlinkingbutton, linkingbutton])
        
        msg.channel.send({component: row, embed: embed})
    },
};
