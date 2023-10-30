require('dotenv').config();
const profileModel = require('../../models/profileSchema');

const cooldowns = new Map();

module.exports = async (Discord, client, msg) => {
        const prefix = process.env.PREFIX;
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    let profileData;
    try {
      profileData = await profileModel.findOne({ userID: msg.author.id });
      if(!profileData) {
        let profile = await profileModel.create({
          userID: msg.author.id,
          serverID: msg.guild.id,
          money: 10000,
          bank: 0,
      });
      profile.save();
  }
} catch(err){
      console.log(err)
    }

    const args = msg.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || 
    client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
      ]

      if(!command) return;
       if(command.permissions.length){
        let invalidPerms = []
        for(const perm of command.permissions){
          if(!validPermissions.includes(perm)){
            const embed = new Discord.MessageEmbed()
       .setTitle('Bot Message')
       .setDescription(`❌ Invalid Arguments, Sorry, Invalid Permissions! ${perm} ❌`)
       .setColor("BLACKK")
       .setFooter('Powered by Special Needs Community')
       .setTimestamp();
            return console.log(embed);
          }
          if(!msg.member.hasPermission(perm)){
            invalidPerms.push(perm);
          }
        }
        if (invalidPerms.length){
          const embed1 = new Discord.MessageEmbed()
       .setTitle('Bot Message')
       .setDescription(`❌ Invalid Arguments, Sorry, Missing Permissions: \`${invalidPerms}\` ❌`)
       .setColor("BLACKK")
       .setFooter('Powered by Special Needs Community')
       .setTimestamp();
          return msg.channel.send(embed1);
        }
      }

    if(!cooldowns.has(command.name)){
            cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if(time_stamps.has(msg.author.id)){
            const expiration_time = time_stamps.get(msg.author.id) + cooldown_amount;

            if(current_time < expiration_time) {
                    const time_left = (expiration_time - current_time) / 1000;
                    const embed2 = new Discord.MessageEmbed()
       .setTitle('Bot Message')
       .setDescription(`❌ Please wait ${time_left.toFixed(1)} More Seconds before Using ${command.name}. ❌`)
       .setColor("BLACKK")
       .setFooter('Powered by Special Needs Community')
       .setTimestamp();

                    return msg.reply(embed2);
            }
    }

    time_stamps.set(msg.author.id, current_time);
    setTimeout(() => time_stamps.delete(msg.author.id), cooldown_amount);


    try{
        command.execute(msg, args, cmd, client, Discord, profileData);
    } catch (err) {
      const embed3 = new Discord.MessageEmbed()
       .setDescription('❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌')
       .setColor("BLACKK")
       .setFooter('Powered by Special Needs Community')
       .setTimestamp();
    msg.reply(embed3)
    console.log(err);
    }
}