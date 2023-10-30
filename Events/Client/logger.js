const Discord = require("discord.js");
const fs = require('fs')
module.exports = c => {
    try{
        c.on("channelCreate", function(channel){
          send_log(c,
            channel.guild,
            "GREEN",
            "Channel Created",
            `ChannelName: \`${channel.name}\`\nChannelID: \`${channel.id}\`\nChannelType: \`${channel.type}\``
          )
        })
        c.on("channelDelete", function(channel){
          send_log(c,
            channel.guild,
            "RED",
            "Channel Deleted",
            `ChannelName: \`${channel.name}\`\nChannelID: \`${channel.id}\`\nChannelType: \`${channel.type}\``
          )
        })
        c.on("channelPinsUpdate", function(channel, time){
          send_log(c,
            channel.guild,
            "YELLOW",
            "Channel Pins Update",
            `ChannelName: \`${channel.name}\`\nChannelID: \`${channel.id}\`\nPinned at \`${time}\``
            , "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/pushpin_1f4cc.png"
          )
        })
        c.on("channelUpdate", function(oldChannel, newChannel){
          let newCat = newChannel.parent ? newChannel.parent.name : "NO PARENT";
          let guildChannel = newChannel.guild;
          if(!guildChannel || !guildChannel.available) return;
  
          let types = {
            text: "Text Channel",
            voice: "Voice Channel",
            null: "No Type",
            news: "News Channel",
            store: "Store Channel",
            category: "Category",
          }
  
          if(oldChannel.name != newChannel.name){
            send_log(c,
              oldChannel.guild,
              "YELLOW",
              "Channel Updated - Name",
              `ChannelName: \`${oldChannel.name}\`\nChannelID: \`${oldChannel.id}\`\n\n`+
              `ChannelName: \`${newChannel.name}\`\nChannelID: \`${newChannel.id}\``
            )
          }
          else if(oldChannel.type != newChannel.type){
            send_log(c,
              oldChannel.guild,
              "YELLOW",
              "Channel Updated - Type",
              `ChannelName: \`${oldChannel.name}\`\nChannelID: \`${oldChannel.id}\`\nChannelType: \`${types[oldChannel.type]}\`\n\n`+
              `ChannelName: \`${newChannel.name}\`\nChannelID: \`${newChannel.id}\`\nChannelType: \`${types[newChannel.type]}\``
            )
          }
          else if(oldChannel.topic != newChannel.topic){
            send_log(c,
              oldChannel.guild,
              "YELLOW",
              "Channel UPDATED - TOPIC",
              `ChannelName: \`${oldChannel.name}\`\nChannelID: \`${oldChannel.id}\`\nChannelTopic: \`${oldChannel.topic}\`\n\n`+
              `ChannelName: \`${newChannel.name}\`\nChannelID: \`${newChannel.id}\`\nChannelTopic: \`${newChannel.topic}\``
            )
          }
  
  
        })
        c.on("emojiCreate", function (emoji) {
            send_log(c,
              emoji.guild,
              "GREEN",
              "Emoji Created",
              `Emoji: ${emoji}\nEmojiname: ${emoji.name}\nEmojiID: ${emoji.id}\nEmojiURL: ${emoji.url}`,
            )
        });
  
        c.on("emojiDelete", function (emoji) {
            send_log(c,
              emoji.guild,
              "RED",
              "Emoji Deleted",
              `Emoji: ${emoji}\nEmojiname: ${emoji.name}\nEmojiID: ${emoji.id}\nEmojiURL: ${emoji.url}`,
            )
        });
  
        c.on("emojiUpdate", function (oldEmoji, newEmoji) {
            if (oldEmoji.name !== newEmoji.name) {
              send_log(c,
                oldEmoji.guild,
                "ORANGE",
                "Emoji Name Changed",
                `__Emoji: ${newEmoji}__ \n\n**Before:** \`${oldEmoji.name}\`\n**After:** \`${newEmoji.name}\`\n**Emoji ID:** \`${newEmoji.id}\``
              )
            }
        });
  
        c.on("guildBanAdd", function (guild, user) {
            send_log(c,
              guild,
              "RED",
              "User Banned",
              `User: ${user} (\`${user.id}\`)\n\`${user.tag}\``,
               member.user.displayAvatarURL({dynamic: true})
            )
        });
  
        c.on("guildBanRemove", function (guild, user) {
            send_log(c,
              guild,
              "YELLOW",
              "User Unbanned",
              `User: ${user} (\`${user.id}\`)\n\`${user.tag}\``,
               member.user.displayAvatarURL({dynamic: true})
              )
        });
  
        c.on("guildMemberAdd", function (member) {
            send_log(member.guild,
               c,
               "GREEN",
               "Member Joined",
               `Member: ${member.user} (\`${member.user.id}\`)\n\`${member.user.tag}\``,
                member.user.displayAvatarURL({dynamic: true})
               )
        });
  
        c.on("guildMemberRemove", function (member) {
            send_log(c,
              member.guild,
              "RED",
              "Member Left",
              `Member: ${member.user} (\`${member.user.id}\`)\n\`${member.user.tag}\``,
              member.user.displayAvatarURL({dynamic: true}))
        });
  
        c.on("guildMembersChunk", function (members, guild) {
            send_log(guild,
              c,
              "RED",
              "Member Chunk / Raid - " + members.length + " Members",
              members.map((user, index) => `${index}) - ${user} - ${user.tag} - \`${user.id}\``),
              )
        });
  
        c.on("guildMemberUpdate", function (oldMember, newMember) {
            let options = {}
  
            if (options[newMember.guild.id]) {
                options = options[newMember.guild.id]
            }
  
            // Add default empty list
            if (typeof options.excludedroles === "undefined") options.excludedroles = new Array([])
            if (typeof options.trackroles === "undefined") options.trackroles = true
            const oldMemberRoles = oldMember.roles.cache.keyArray()
            const newMemberRoles = newMember.roles.cache.keyArray()
            const oldRoles = oldMemberRoles.filter(x => !options.excludedroles.includes(x)).filter(x => !newMemberRoles.includes(x))
            const newRoles = newMemberRoles.filter(x => !options.excludedroles.includes(x)).filter(x => !oldMemberRoles.includes(x))
            const rolechanged = (newRoles.length || oldRoles.length)
  
            if (rolechanged) {
                let roleadded = ""
                if (newRoles.length > 0) {
                    for (let i = 0; i < newRoles.length; i++) {
                        if (i > 0) roleadded += ", "
                        roleadded += `<@&${newRoles[i]}>`
                    }
                }
                let roleremoved = ""
                if (oldRoles.length > 0) {
                    for (let i = 0; i < oldRoles.length; i++) {
                        if (i > 0) roleremoved += ", "
                        roleremoved += `<@&${oldRoles[i]}>`
                    }
                }
                let text = `${roleremoved ? `❌ Role Removed: \n${roleremoved}` : ""}${roleadded ? `✅ Role Added:\n${roleadded}` : ""}`
                send_log(c,
                  oldMember.guild,
                  `${roleadded ? "GREEN" : "RED"}`,
                  "Member Roles Changed",
                  `Member: ${newMember.user}\nUser: \`${oldMember.user.tag}\`\n\n${text}`,
                  )
            }
  
        });
  
        c.on("messageDelete", function (msg) {
                if (msg.author.bot) return;
  
                if (msg.channel.type !== "text") return;
  
                send_log(c,
                  msg.guild,
                  "ORANGE",
                  "Message Deleted", `
  **Author : ** <@${msg.author.id}> - *${msg.author.tag}*
  **Date : ** ${msg.createdAt}
  **Channel : ** <#${msg}.channel.id}> - *${msg.channel.name}*
  **Deleted Message : **
  \`\`\`
  ${msg.content.replace(/`/g, "'")}
  \`\`\`
  **Attachment URL : **
  ${msg.attachments.map(x => x.proxyURL)}
  `,
  )
        });
  
        c.on("messageDeleteBulk", function (messages) {
            send_log(c,
              messages.guild,
              "RED",
              messages.length + "  Message Deleted Bulk",
              `${messages.length} Messages Delete in: ${messages.channel}`
            )
        });
  
        c.on("messageUpdate", function (oldMessage, newMessage) {
          if (oldMessage.author.bot) return;
  
          if (oldMessage.channel.type !== "text") return
          if (newMessage.channel.type !== "text") return
  
          if (oldMessage.content === newMessage.content) return
          send_log(c, oldMessage.guild,
            "YELLOW",
            "Message Updated",`
  **Author : ** <@${newMessage.member.user.id}> - *${newMessage.member.user.tag}*
  **Date : ** ${newMessage.createdAt}
  **Channel : ** <#${newMessage.channel.id}> - *${newMessage.channel.name}*
  **Original Message : **
  \`\`\`
  ${oldMessage.content.replace(/`/g, "'")}
  \`\`\`
  **Updated Message : **
  \`\`\`
  ${newMessage.content.replace(/`/g, "'")}
  \`\`\``)
        });
  
        c.on("roleCreate", function (role) {
            send_log(c,
              role.guild,
              "GREEN",
              "Role Created",
              `ROLE: ${role}\nROLENAME: ${role.name}\nROLEID: ${role.id}\nHEXCOLOR: ${role.hexColor}\nPOSITION: ${role.position}`
              )
        });
  
        c.on("roleDelete", function (role) {
            send_log(c,
              role.guild,
              "RED",
              "Role Deleted",
              `ROLE: ${role}\nROLENAME: ${role.name}\nROLEID: ${role.id}\nHEXCOLOR: ${role.hexColor}\nPOSITION: ${role.position}`
              )
        });
  
        c.on("roleUpdate", function (oldRole, newRole) {
          let perms = {
  "1": "CREATE_INSTANT_INVITE",
  "2": "KICK_MEMBERS",
  "4": "BAN_MEMBERS",
  "8": "ADMINISTRATOR",
  "16": "MANAGE_CHANNELS",
  "32": "MANAGE_GUILD",
  "64": "ADD_REACTIONS",
  "128": "VIEW_AUDIT_LOG",
  "256": "PRIORITY_SPEAKER",
  "1024": "VIEW_CHANNEL",
  "1024": "READ_MESSAGES",
  "2048": "SEND_MESSAGES",
  "4096": "SEND_TTS_MESSAGES",
  "8192": "MANAGE_MESSAGES",
  "16384": "EMBED_LINKS",
  "32768": "ATTACH_FILES",
  "65536": "READ_MESSAGE_HISTORY",
  "131072": "MENTION_EVERYONE",
  "262144": "EXTERNAL_EMOJIS",
  "262144": "USE_EXTERNAL_EMOJIS",
  "1048576": "CONNECT",
  "2097152": "SPEAK",
  "4194304": "MUTE_MEMBERS",
  "8388608": "DEAFEN_MEMBERS",
  "16777216": "MOVE_MEMBERS",
  "33554432": "USE_VAD",
  "67108864": "CHANGE_NICKNAME",
  "134217728": "MANAGE_NICKNAMES",
  "268435456": "MANAGE_ROLES",
  "268435456": "MANAGE_ROLES_OR_PERMISSIONS",
  "536870912": "MANAGE_WEBHOOKS",
  "1073741824 ": "MANAGE_EMOJIS",
  "CREATE_INSTANT_INVITE": "CREATE_INSTANT_INVITE",
  "KICK_MEMBERS": "KICK_MEMBERS",
  "BAN_MEMBERS": "BAN_MEMBERS",
  "ADMINISTRATOR": "ADMINISTRATOR",
  "MANAGE_CHANNELS": "MANAGE_CHANNELS",
  "MANAGE_GUILD": "MANAGE_GUILD",
  "ADD_REACTIONS": "ADD_REACTIONS",
  "VIEW_AUDIT_LOG": "VIEW_AUDIT_LOG",
  "PRIORITY_SPEAKER": "PRIORITY_SPEAKER",
  "VIEW_CHANNEL": "VIEW_CHANNEL",
  "READ_MESSAGES": "READ_MESSAGES",
  "SEND_MESSAGES": "SEND_MESSAGES",
  "SEND_TTS_MESSAGES": "SEND_TTS_MESSAGES",
  "MANAGE_MESSAGES": "MANAGE_MESSAGES",
  "EMBED_LINKS": "EMBED_LINKS",
  "ATTACH_FILES": "ATTACH_FILES",
  "READ_MESSAGE_HISTORY": "READ_MESSAGE_HISTORY",
  "MENTION_EVERYONE": "MENTION_EVERYONE",
  "EXTERNAL_EMOJIS": "EXTERNAL_EMOJIS",
  "USE_EXTERNAL_EMOJIS": "USE_EXTERNAL_EMOJIS",
  "CONNECT": "CONNECT",
  "SPEAK": "SPEAK",
  "MUTE_MEMBERS": "MUTE_MEMBERS",
  "DEAFEN_MEMBERS": "DEAFEN_MEMBERS",
  "MOVE_MEMBERS": "MOVE_MEMBERS",
  "USE_VAD": "USE_VAD",
  "CHANGE_NICKNAME": "CHANGE_NICKNAME",
  "MANAGE_NICKNAMES": "MANAGE_NICKNAMES",
  "MANAGE_ROLES": "MANAGE_ROLES",
  "MANAGE_ROLES_OR_PERMISSIONS": "MANAGE_ROLES_OR_PERMISSIONS",
  "MANAGE_WEBHOOKS": "MANAGE_WEBHOOKS",
  "MANAGE_EMOJIS": "MANAGE_EMOJIS"
   }
            if (oldRole.name !== newRole.name) {
                send_log(c,
                  oldRole.guild,
                   "ORANGE",
                   "Role Name Changed",
  `__ROLE: ${oldRole}__ \n\n**Before:** \`${oldRole.name}\`
  **After:** \`${newRole.name}\`
  **Role ID:** \`${newRole.id}\`
  `)
            }
  
            else if (oldRole.color !== newRole.color) {
              send_log(c,
                oldRole.guild,
                "ORANGE",
                "Role Color Changed",
                `__ROLE: ${newRole}__ \n\n**Before:** \`${oldRole.color.toString(16)}\`
              **After:** \`${newRole.color.toString(16)}\`
              **ROLE ID:** \`${newRole.id}\``)
  
            }
            else {
              send_log(c,
                oldRole.guild,
                "RED",
                "ROLE PERMISSIONS CHANGED",
    `__ROLE: ${newRole}__ \n
  **The Permissions Changed, Please Check!**
  OLD PERMISSIONS: ${/*perms[String(oldRole.permissions.bitfield)]*/oldRole.permissions.bitfield}
  NEW PERMISSIONS: ${/*perms[String(newRole.permissions.bitfield)]*/newRole.permissions.bitfield}
  **Role ID:** \`${newRole.id}\``)
            }
        });
  
        c.on("userUpdate", function (oldUser, newUser) {
            if(oldUser.username !== newUser.username){
                send_log(newUser.guild,
                  c,
                  "BLACK",
                  "Member Username Changed",
                  `Member: ${newUser}\nOld Username: \`${oldUser.username}\`\nNew Username: \`${newUser.username}\` `,
                  )
            }
        });
  
      }catch (e) {
          console.log(String(e.stack).yellow)
      }
  }
  
  async function send_log(c, guild, color, title, description, thumb){
    try {
      //CREATE THE EMBED
      const LogEmbed = new Discord.MessageEmbed()
      .setColor(color ? color : "BLACK")
      .setDescription(description ? description.substr(0, 2048) : "\u200b")
      .setTitle(title ? title.substr(0, 256) : "\u200b")
      .setTimestamp()
      .setThumbnail()
      .setFooter("Powered by Special Needs Community")
      //GET THE CHANNEL
      const logger = await c.channels.fetch(c.config.loggerChannelID);

      
      if(!logger) throw new SyntaxError("Channel Not Found")
        //TRY TO GET THE WEBHOOK, BUT IF THERE IS NO WEBHOOK THEN RETURN CREATE IT
        try{
          if(!c.config.webhook.id) return createandsavewebhook();
          const hook = new Discord.WebhookClient(c.config.webhook.id, c.config.webhook.token);
          if(!hook) return createandsavewebhook();
          hook.send({
            username: guild.name,
            embeds: [LogEmbed],
          })
        }catch{
            return createandsavewebhook();
        }
  
      function createandsavewebhook(){
      /*
         * Create a new webhook
         * The Webhooks ID and token can be found in the URL, when you request that URL, or in the response body.
         * https://discord.com/api/webhooks/914073906338476073/9tNzlBE_PG0RLoRig7oYEey_IwvPIqtmxM_2xK1druHvDx63bhS1DF5iaacGEjNtUR2n
         *                                  ^^^^^^^^^^  ^^^^^^^^^^^^
         *                                  Webhook ID  Webhook Token
         */

        logger.createWebhook(guild.name, {
        }).then(webhook=>{
          webhook.send({
            username: guild.name,
            embeds: [LogEmbed],
          })
          .catch(e=>console.log(String(e.stack).yellow))
          try{
              let oldconfig = c.config;
              oldconfig.webhook.id = webhook.id; 
              oldconfig.webhook.token = webhook.token; 
              fs.writeFile("../../config.json", JSON.stringify(oldconfig, null, 3), (e) => {
                  if (e) {
                    console.log(String(e.stack).red);
                  }
                  console.log("Created Webhook and Saved into config.json File!".bold.green)
                });
          }catch(e){
              console.log(String(e.stack).red);
          }
        })
      }
  
    } catch (e) {
        console.log(String(e.stack).yellow)
    }
  }