const noblox = require('noblox.js')
module.exports = {
    name: 'verify',
    aliases: [],
    category: 'General',
    usage: '',
    description: 'Command Used to Verify with ROBLOX Verification.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {

        function SendVerificationMessage(Title, Description, Color) {
            const Embed = new Discord.MessageEmbed()
            .setAuthor('Special Needs Community')
            .setTitle(Title)
            .setDescription(Description)
            .setColor(Color)
            .setFooter('This Prompt will Cancel in 2 Minutes.')
            .setTimestamp()
            msg.channel.send(Embed);
        }

        msg.channel.send('**Starting Verification Process..**').then(editedMsg => {
            editedMsg.edit('**Awaiting Prompt..**')
            editedMsg.delete();

            function Generate() {
                let text = '';
                let randomstuff = ['snc special needs community snc', 'snc snc roblox rblx special needs', 'special community needs rblx roblox snc'];
                text += randomstuff[Math.floor(Math.random() * randomstuff.length)];
                return text;
            }
            const filter = m => m.author.id === msg.author.id;
            const collector = msg.channel.createMessageCollector(filter, {
                max: '1',
                maxMatches: '1',
                time: '120000',
                errors: ['time']
            })
            const embed = new Discord.MessageEmbed()
            .setTitle('Special Needs Community Verification Process')
            .setDescription('❓ What is your ROBLOX Username?')
            .setColor('BLACK')
            .setFooter('This Prompt will Cancel in 2 Minutes.')
            .setTimestamp();
            msg.channel.send(embed);
            collector.on('collect', m => {
                if (m.content.toLowerCase() === 'cancel') {
                    SendVerificationMessage('Special Needs Community Verification Prompt', 'Cancelled the Verification Prompt.', 'RED')
                    return;
                }
                noblox.getIdFromUsername(m.content).then(foundUser => {
                    const UserId = foundUser;
                    const string = Generate()
                    SendVerificationMessage(`Hello ${m.content}!`, 'To Verify That You Own This Account, Please Put This In Your ROBLOX Blurb or Status: \n\n`' + string + '`\n\nWhen You Have Completed This, Say **Done**.\nIf You Wish to Cancel the Verification Process, Say **Cancel**.', 'BLACK')
                    const collector2 = msg.channel.createMessageCollector(filter, {
                        max: '1',
                maxMatches: '1',
                time: '120000',
                errors: ['time']
                    })
                    collector2.on('collect', async message => {
                        const embed2 = new Discord.MessageEmbed()
                        .setTitle('Special Needs Community Verification Process')
                          .setDescription(`**Searching for ${string} on ${m.content}.**`)
                        .setColor('BLACK')
                        .setFooter('Powered by Special Needs Community')
                          .setTimestamp();
                        if (message.content.toLowerCase() === 'done' && message.author.id === msg.author.id) {
                            message.channel.send(embed2).then(async message1 => {
                                setTimeout(function () {
                                    
                                    noblox.getStatus(UserId).then(async status => {
                                        noblox.getBlurb(UserId).then(async blurb => {
                                            if (status.includes(string) || blurb.includes(string)) {
                                                const embed3 = new Discord.MessageEmbed()
                        .setTitle('Special Needs Community Verification Process')
                          .setDescription('You are now Verified as `' + m.content + '`.')
                        .setColor('BLACK')
                        .setFooter('Powered by Special Needs Community')
                          .setTimestamp();
                                                await (`${msg.author.id}.username`, m.content)
                                                message1.edit(embed3).then
                                                (msg => msg.delete({timeout: 6000}));
                                                let verifiedRole = await msg.guild.roles.cache.find(role => role.name === '✔️ Approved Special Needs Community Bot ROBLOX Verification ✔️')
                                                await msg.member.roles.add(verifiedRole)
                                                await msg.member.setNickname(m.content)
                                            
                                            const embed4 = new Discord.MessageEmbed()
                        .setTitle('Special Needs Community Verification Process')
                          .setDescription('**You are now Verified as `' + m.content + '`!**')
                        .setColor('BLACK')
                        .setFooter('Powered by Special Needs Community')
                          .setTimestamp();

                                            message1.edit(embed4).then
                                            (msg => msg.delete({timeout: 6000}));
                                        } else {
                                            const embed1 = new Discord.MessageEmbed()
                                            .setTitle('Special Needs Community Verification Process')
                                              .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
                                            .setColor('BLACK')
                                            .setFooter('Powered by Special Needs Community')
                                              .setTimestamp();
                                            msg.channel.send(embed1).then
                                            (msg => msg.delete({timeout: 6000}));
                                        }
                                        })
                                    })
                                }, 5000);
                            })
                        } else if (message.content.toLowerCase() === 'cancel' && message.author.id === msg.author.id) {
                            SendVerificationMessage('Special Needs Community Verification Prompt', 'Cancelled the Verification Prompt.', 'RED')
                        }
                        })
                    })
                })
            })
            }
}