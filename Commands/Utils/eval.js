const { inspect } = require("util")
module.exports = {
    name: 'eval',
    aliases: ["docs"],
    category: 'Information',
    usage: '',
    description: 'Command used to Request the Eval Command.',
    permissions: [],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
        if (msg.author.id !== "371751216163717130") return;

        const code = args.join(" ");
        if(!code) return msg.reply(embed);

        try {
            const result = await eval(code);
            let output = result;
            if (typeof result !== "string") {
                output = inspect(result);
            }

            msg.channel.send(output, { code: "js" });
        } catch (error) {
            msg.channel.send(embed);
        }
    },
};