const figlet = require("figlet")
module.exports = {
    name: 'textart',
    aliases: [],
    category: 'Games',
    usage: '',
    description: 'Command used for Text Art/ASCII.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client , Discord) {
        figlet.text(
            args.join(" "),
            {
                font: "Train",
            },
            async (err, data) => {
                msg.channel.send(`\`\`\`${data}\`\`\``);
            }
        )
    }
}