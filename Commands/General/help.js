module.exports = {
    name: 'help',
    aliases: [],
    category: 'General',
    usage: '',
    description: 'Command Used to Request Help to the Special Needs Community Bot.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client, Discord) {
    if (args[0]) {
      const command = await client.commands.get(args[0]);
      const embed1 = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription('Unknown Command: ' + args[0])
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();

      if (!command) {
        return msg.channel.send(embed1).then
        (msg => msg.delete({timeout: 6000}));
      }

      let embed = new Discord.MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description", command.description || "Not Provided")
        .addField("Usage", "?" + command.usage || "Not Provided")
        .setURL("https://www.roblox.com/groups/7810098/Special-Needs-Community#!/about")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();

      return msg.channel.send(embed);
    } else {
      const commands = await client.commands;

      let emx = new Discord.MessageEmbed()
      .setTitle('Special Needs Community')
        .setDescription(
          `Type ?help <cmd> for Specific Command Details.
          [✉️ Join our Special Needs Community Facebook Group!](https://www.facebook.com/groups/specialneedscommunit)
          [✉️ Join our Special Needs Community ROBLOX Group!](https://www.roblox.com/groups/7810098/Special-Needs-Community#!/about)
          [✉️ Join our Special Needs Community Discord Server!](https://discord.gg/M6k2XbKTqC)
          [📳 Follow us in Facebook!](https://www.facebook.com/specialneedscommunity1)
          [📳 Follow us in Twitter!](https://twitter.com/SnNeeds_)
          [📳 Follow us in Instagram!](https://www.instagram.com/specialneedscommunity_/)
          [📳 Follow us in Snapchat!](https://www.snapchat.com/add/specialneedscom)
          [💸 Donate Us Via Paypal to Show Support!](https://www.paypal.com/donate/?hosted_button_id=9JN7QXPXUNDGU)`
          )
          

        .setColor("BLACK")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp();

        let emx1 = new Discord.MessageEmbed()
        .setTitle('Special Needs Community')
          .setDescription(
            `Type ?help <cmd> **in-server** for Specific Command Details.
            [✉️ Join our Special Needs Community Facebook Group!](https://www.facebook.com/groups/specialneedscommunit)
            [✉️ Join our Special Needs Community ROBLOX Group!](https://www.roblox.com/groups/7810098/Special-Needs-Community#!/about)
            [✉️ Join our Special Needs Community Discord Server!](https://discord.gg/M6k2XbKTqC)
            [📳 Follow us in Facebook!](https://www.facebook.com/specialneedscommunity1)
            [📳 Follow us in Twitter!](https://twitter.com/SnNeeds_)
            [📳 Follow us in Instagram!](https://www.instagram.com/specialneedscommunity_/)
            [📳 Follow us in Snapchat!](https://www.snapchat.com/add/specialneedscom)
            [💸 Donate Us Via Paypal to Show Support!](https://www.paypal.com/donate/?hosted_button_id=9JN7QXPXUNDGU)
            
            Thanks for using Special Needs Community Bot! Check in-server for the Special Needs Community Bot Dashboad Commands!`        
          )
          .setColor("BLACK")
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setThumbnail(client.user.displayAvatarURL())
          .setTimestamp();

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for (const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category} [${value.length}]`, desc);  
      }

      msg.channel.send(emx)
      msg.author.send(emx1);
    }
  }
};
