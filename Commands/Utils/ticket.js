const fs = require('fs')
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'ticket',
    aliases: [],
    category: 'Utils',
    usage: '',
    description: 'Command used to Make a New Ticket for Report.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
        const transcriptChannel = msg.guild.channels.cache.get('875786812164046868')
        const channel = await msg.guild.channels.create(`ticket: ${msg.author.tag}`);
        channel.setParent('875786740101697606');

        channel.updateOverwrite(msg.guild.id, {
            VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(msg.author, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
        });

        const embed = new Discord.MessageEmbed()
        .setTitle('Special Needs Community Bot Contacting Support System')
        .setDescription('Thanks for contacting Special Needs Community support, a staff member will get back to you as soon as possible.')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        const embed2 = new Discord.MessageEmbed()
        .setTitle('Special Needs Community Bot Contacting Support System')
        .setDescription('⛔ Deleting this Ticket in 10 Seconds.')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        const embed4 = new Discord.MessageEmbed()
        .setTitle('Special Needs Community Bot Contacting Support System')
        .setDescription('🔒 Ticket has been Locked.')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        const embed5 = new Discord.MessageEmbed()
        .setTitle('Special Needs Community Bot Contacting Support System')
        .setDescription('🔓 Ticket has been Unlocked.')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

        const reactionMessage = await channel.send(embed);

        try {

            await reactionMessage.react("🔒");
            await reactionMessage.react("🔓");
            await reactionMessage.react("⛔");
        } catch(err) {
            channel.send(embed1).then
            (msg => msg.delete({timeout: 6000}));
            (msg => msg.locked({timeout: 6000}));
            (msg => msg.unlocked({timeout: 6000}));
            throw err;
        }

        const collector = reactionMessage.createReactionCollector((reaction, user) =>
        msg.guild.members.cache.find((member) => member.id === user.id).hasPermission('ADMINISTRATOR'),
        { dispose: true }
        );

        collector.on('collect', (reaction, user) => {
            switch (reaction.emoji.name) {
                case "🔒":
                    channel.send(embed4);
                    channel.updateOverwrite(msg.author, {SEND_MESSAGES: false });
                    break;
                case "🔓":
                        channel.send(embed5);
                        channel.updateOverwrite(msg.author, {SEND_MESSAGES: true });
                        break;
                case "⛔":
                    channel.send(embed2);
                    setTimeout(() => {
                        channel.delete().then(async ch => {
                            client.ticketTranscript.findOne({Channel : ch.id }, async(err, data) => {
                                if(err) throw err;
                    if(data) {
                        const embed3 = new Discord.MessageEmbed()
        .setTitle('Special Needs Community Bot Contacting Support System')
        .setDescription(`#${ch.id} Channel ID Ticket has been Closed. The Below is the Full Conversation or Log of the Ticket of the this Ticket/User.`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
                        fs.writeFileSync(`../${ch.id}.txt`, data.Content.join("\n\n"))
                        transcriptChannel.send(embed3)
                        await transcriptChannel.send(new MessageAttachment(fs.createReadStream(`../${ch.id}.txt`)));
                        client.ticketTranscript.findOneAndDelete({Channel : ch.id })
                    }
                            })
                            })
                        }, 10000)
                    break;
            }
        });

        msg.channel.send(`${channel}`).then((message) => {
            setTimeout(() => message.delete(), 7000);
            setTimeout(() => msg.delete(), 3000);
        }).catch((err) => {
            throw err;
        })
},
};
