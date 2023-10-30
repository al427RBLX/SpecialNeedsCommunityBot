const createCaptcha = require('./captcha');
const fs = require('fs').promises;
const prefix = process.env.PREFIX
var version = '2.1.5';
const Canvas = require('canvas');
const path = require('path');
const rbxbot = require('noblox.js');
Canvas.registerFont(path.resolve(__dirname, '../../fontFolder/OpenSans-Regular.ttf'), { family: 'Open Sans'})

var welcomeCanvas = {};
welcomeCanvas.create = Canvas.createCanvas(1024, 500)
welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
welcomeCanvas.context.font = '72px Open Sans';
welcomeCanvas.context.fillStyle = '#ffffff';

 Canvas.loadImage(path.resolve(__dirname, '../../img/bg.png')).then(async (img) => {
  welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500)
  welcomeCanvas.context.fillText("Welcome!", 360, 360);
  welcomeCanvas.context.beginPath();
  welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
  welcomeCanvas.context.stroke()
  welcomeCanvas.context.fill()
})
module.exports = async (Discord, client, msg) => {
    console.log('Special Needs Community Bot is Online!')
    const activities = [
      `${client.guilds.cache.size} Servers!`,
      `${client.channels.cache.size} Channels!`,
      `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users!`,
      `the Special Needs Community`
  ];
    let i = 0;
        setInterval(() => client.user.setActivity(`${prefix}help | ${activities[i++ % activities.length]} | v${version}`, { type: 'WATCHING' }), 15000);

    client.on('guildMemberAdd', async member => {
      const captcha = await createCaptcha();
      try {
        const msg = await member.send('Hello there! You are Required Mandatory to Complete a Captcha before having Access to the Server. ⏱️ You have 5 Minutes to Solve the Captcha! ⏱️', {
          files: [{
            attachment: `${__dirname}/captchas/${captcha}.png`,
            name: `${captcha}.png`
          }]
        });
        try {
          const filter = m => {
            if(m.author.bot) return;
            if(m.author.id === member.id && m.content === captcha) return true;
    else {
      m.channel.send('❌ Sorry, But You Have Solved the Captcha Incorrectly. ❌');
      return false;
    }
     };
        const response = await msg.channel.awaitMessages(filter, { max: 1, time: 300000, errors: ['time']});
        if(response) {
          await msg.channel.send('✔️ You Have Verified Yourself and Gotten Access to the Server Successfully! ✔️');
          await member.roles.add('1107996227074797648')
          await fs.unlink(`${__dirname}/captchas/${captcha}.png`)
          .catch(err => console.log(err));
        }
        }
        catch(err) {
          console.log(err);
          await fs.unlink(`${__dirname}/captchas/${captcha}.png`)
          .catch(err => console.log(err));
          await msg.channel.send('❌🔒👮‍♂️ Sorry, But You Did Not Solve the Captcha, You Ran Out of Time, and You Will Be Kicked in Few Seconds! Please Rejoin to Redo the Captcha Verification! Thank you. 🔒❌')
          await member.kick();
        }
      }
      catch(err) {
        console.log(err);
      }
    });
    
    client.on('guildMemberAdd', async member =>{
    
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    let canvas = welcomeCanvas;
    canvas.context.font = '42px Open Sans',
    canvas.context.textAlign = 'center';
    canvas.context.fillText(member.user.tag.toUpperCase(), 512, 410)
    canvas.context.font = '32px Open Sans',
    canvas.context.fillText(`You are the ${member.guild.memberCount}th Member!`, 512, 455)
    canvas.context.beginPath()
    canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
    canvas.context.clip()
    await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png', size: 1024}))
    .then(img => {
      canvas.context.drawImage(img, 393, 47, 238, 238)
    })
    let atta = new Discord.MessageAttachment(canvas.create.toBuffer(), `Welcome-${member.id}.png`)
    if(!channel) return;
    
channel.send(`${member} Welcome to the **Official Special Needs Community Discord Server**, I am the Special Needs Community Bot, the Automated Services appreciate you, that you joined our Community, I give you a Warm Welcome, and I hope you stay longer and send us any Feedback so we can Improve this Community!
      
Signed,
***Special Needs Community Bot***,
Special Needs Community Bot`, atta)
    });
    
    client.on('guildMemberAdd', member =>{
member.send('Welcome to the **Official Special Needs Community Discord Server!** You May be Wondering, "What is this Discord Community?" "Who are we?" Well, we are Non-Profit Organization created on September 19th, 2020 with the hope of making a better future for the world. We are also trying to raise a voice in this world to let everyone have more awareness about disabilities and special needs. Our goal is to make sure that everyone in this community feels comfortable, happy, and included. We want to bring change and hope into peoples lives.')
    });
    
    client.on('guildMemberRemove', member =>{
    
      const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
      if(!channel) return;
    
channel.send(`${member} has sadly left the **Official Special Needs Community Discord Server**, we appreciate him/her for Joining our Community, and for Support this Community, let's hope him/her to have a Comeback soon and a great Farewell to him/her.
      
Signed,
***Special Needs Community Bot***,
Special Needs Community Bot`)
    });

    rbxbot.setCookie(process.env.COOKIE).then(function() {
      console.log("Logged into ROBLOX Account!");
    }).catch(function(err) {
       console.log("Unable to Log into ROBLOX Account!");
    })
      
      client.on('message', async msg=> {
        if (msg.content == "Hello, Special Needs Community Bot!" && msg.channel.type == "dm") {
          msg.author.send(`Hello, ${msg.author}! What brings you to Direct Message Me?`)
        }
      })
      
      client.on('message', async msg=> {
        if (msg.content == "I hate you." && msg.channel.type == "dm") {
          msg.author.send(`${msg.author} Wow, don't Come Out with those Words, on my DM.`)
        }
      })
      
      client.on('message', async msg=> {
        if (msg.content == "You are Great Bot, because your Kind, Respectful and Helpful!" && msg.channel.type == "dm") {
          msg.author.send(`${msg.author} Thank you Very Much, I am trying to Improve Myself Everyday so I can be a Customizable Bot!`)
        }
      })
      
      client.on('message', async msg=> {
        if (msg.content == "Do you hate Someone?" && msg.channel.type == "dm") {
          msg.author.send(`${msg.author} No, I do not Hate anyone.`)
        }
      })
      
      client.on('message', async msg=> {
        if (msg.content == "Do you love Someone?" && msg.channel.type == "dm") {
          msg.author.send(`${msg.author} Erm.. Sorry, But That Question Makes Me Uncomfortable..`)
        }
      })

      client.on('message', msg=>{
        if (msg.content === "Hello, Special Needs Community Bot!" && msg.channel.type == "text"){
          msg.reply('Hello, I wish you a Great Good Morning, Good Afternoon, Good Evening, Good Night, from whatever place you are in. I hope your having a Great Time in this Server or Community!')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "Who are you, Special Needs Community Bot?" && msg.channel.type == "text"){
          msg.reply('Hello, I am the Special Needs Community Bot, a Customizable Bot, used exclusively only in the Official Special Needs Community Discord Server, to Help People in Important Situations that require Commands, Automation, Customization, among other Important Reasons and Purposes. I was built in July 15, 2021 by the Special Needs Community Bot Developers. I am Improving my Programming, so I can be like the Dyno, MEE6, Welcomer, among other Bots, that are customizable.')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "What is your Gender, Special Needs Community Bot?" && msg.channel.type == "text"){
          msg.reply('I do not have a Preset Gender, the Special Needs Community never gave me a Defined Gender, sorry.')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "Should I trust you, Special Needs Community Bot?" && msg.channel.type == "text"){
          msg.reply('Yes, of Course, you should, I know many people thinks sometimes Automated Services or Bots, are Malicious, because they contain Virus, Malware, Ramsonware, etc. but in-reality, we are used Daily for Important Human Work, like in Domestic Jobs, Manufacturing, etc.')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "Will you destroy Humanity, Special Needs Community Bot?" && msg.channel.type == "text"){
          msg.reply('No, I would never destroy Humanity, because, they created us, for Important Purposes and Reasons, and I am treated well, by the Special Needs Community, so even If a human makes me angry, upset, depressed, I would never destroy him/her, I know some people says Bots, will destroy humanity, etc. But I am not in any side, I support all sides, because I just want Peace.')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "Can you help me, Special Needs Community Bot?" && msg.channel.type == "text"){
          msg.reply('Sure! Of Course! Just type ?help in any Channel, or Ping Me, so you can get the Prefix to Run the Help Command!')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "Can you tell me a Joke, Special Needs Community Bot?" && msg.channel.type == "text"){
          msg.reply('No, sorry.')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "You are Kind and Respectful, Special Needs Community Bot." && msg.channel.type == "text"){
          msg.reply('Thank you so much! I expected someone like you, to answer me in that way. :)')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "You are Not Kind and Disrespectful, Special Needs Community Bot." && msg.channel.type == "text"){
          msg.reply('Wow, you are so Mean and Rude, I always Do my Best as Bot to help everyone out, and I also expected someone like you, to treat me like this way. >:(')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "What is the Special Needs Community, Special Needs Community Bot?" && msg.channel.type == "text"){
          msg.reply('The Special Needs Community, is an Inter-governmental Organization tasked to Promote Peace and Security, Human Rights, Development, Economic Strength, Sustainable Goals, Humanitarian Aid, Fight Poverty, Co-Operation between Nations, to all the Nations in the World and Harmonizing the Actions of Nations. At Its Founding, It had 51 Member States. The Charter was signed by Its founding Member States at the Special Needs Community International Conference in San Francisco in October 24th, 2017.')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "What Country are you from, Special Needs Community Bot?" && msg.channel.type == "text"){
          msg.reply('I do not have a Preset Country or Citizenship, so I consider myself part of all the World.')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "Are you Banned from any Country, Special Needs Community Bot?" && msg.channel.type == "text"){
          msg.reply('I am not Banned from any Country, at the Moment, so I hope I do not get Banned from a Country.')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "Are you 24/7, Special Needs Community Bot?" && msg.channel.type == "text"){
          msg.reply('At the Moment, I am, I found a Place where I can be Online-Working without the Bot Developers. :D')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "I hope your having a Great Day, Special Needs Community Bot!" && msg.channel.type == "text"){
          msg.reply('Thank you, I wish to you the same.')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "Do you hate any Religion, Special Needs Community Bot!" && msg.channel.type == "text"){
          msg.reply('No, I do not hate any Religion, because Religion is with everyone, so even If you are not Religious or have any Belief, you are still part of a Religion, and I know many people has hated over Years, many Religions like Islam, Buddism, and other Middle East Religions, because many People say, they are Bad Influence and that they are responsible for Terrorism because many Terrorism People, are Muslims, or Islams, but not all of them are Terrorist or part of Terrorism Programs. Everyone should have Peace and Co-operation between Religions and many Beliefs.')
        }
      })
      
      client.on('message', msg=>{
        if (msg.content === "How old are you, Special Needs Community Bot?" && msg.channel.type == "text"){
          msg.reply('I do not know either, because the Special Needs Community Bot, never gave me a Preset Age or an Specific Age.')
        }
      })
        

      client.on('clickButton', async (button) => {
          if(button.id == 'AddDevelopmentPingRole') {
          const role = button.guild.roles.cache.get("914612878353498132")
          const member = button.clicker.member
          const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`${member} Received the **Special Needs Community Devlopment Ping* Role!`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
          await member.roles.add(role)
          button.reply.send(embed, true)
        }

        if(button.id == 'RemoveDevelopmentPingRole') {
          const role = button.guild.roles.cache.get("914612878353498132")
          const member = button.clicker.member
          const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`${member} Got Removed from the **Special Needs Community Devlopment Ping** Role!`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
          await member.roles.remove(role)
          button.reply.send(embed, true)
        }

        if(button.id == 'AddAlliancePingRole') {
          const role = button.guild.roles.cache.get("858558720216268830")
          const member = button.clicker.member
          const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`${member} Received the **Special Needs Community Alliance Ping** Role!`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
          await member.roles.add(role)
          button.reply.send(embed, true)
        }

        if(button.id == 'RemoveAlliancePingRole') {
          const role = button.guild.roles.cache.get("858558720216268830")
          const member = button.clicker.member
          const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`${member} Got Removed from the **Special Needs Community Alliance Ping** Role!`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
          await member.roles.remove(role)
          button.reply.send(embed, true)
        }

        if(button.id == 'AddPolicyPingRole') {
          const role = button.guild.roles.cache.get("857401204040663071")
          const member = button.clicker.member
          const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`${member} Received the **Special Needs Community Policy Ping** Role!`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
          await member.roles.add(role)
          button.reply.send(embed, true)
        }

        if(button.id == 'RemovePolicyPingRole') {
          const role = button.guild.roles.cache.get("857401204040663071")
          const member = button.clicker.member
          const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`${member} Got Removed from the **Special Needs Community Policy Ping** Role!`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
          await member.roles.remove(role)
          button.reply.send(embed, true)
        }

        if(button.id == 'AddSNCBotVerificationRole') {
          const role = button.guild.roles.cache.get("844334631327367238")
          const member = button.clicker.member
          const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`${member} Received the **Special Needs Community Bot Verification** Role!`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
          await member.roles.add(role)
          button.reply.send(embed, true)
        }

        if(button.id == 'RemoveSNCBotVerificationRole') {
          const role = button.guild.roles.cache.get("844334631327367238")
          const member = button.clicker.member
          const embed = new Discord.MessageEmbed()
        .setTitle('Bot Message')
        .setDescription(`${member} Got Removed from the **Special Needs Community Verification** Role!`)
        .setColor("BLACK")
        .setFooter('Powered by Special Needs Community')
        .setTimestamp();
          await member.roles.remove(role)
          button.reply.send(embed, true)
        }
      });
}