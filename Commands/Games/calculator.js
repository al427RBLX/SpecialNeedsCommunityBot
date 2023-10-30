const disbut = require('discord-buttons');
const math = require('mathjs');

module.exports = {
    name: 'calculator',
    aliases: [],
    category: 'Games',
    usage: '',
    description: 'Command used for Calculator.',
    permissions: ['SEND_MESSAGES'],
    cooldown: 10,
    async execute(msg, args, cmd, client , Discord) {
      let button = new Array([], [], [], [], []);
      let row = [];
      let text = ["clear", "(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", "00", "="];
      let current = 0;

      for(let i = 0; i < text.length; i++) {
          if (button[current].length === 4) current++;
          button[current].push(createButton(text[i]));
          if (i === text.length - 1) {
              for(let btn of button) row.push(addRow(btn));
          }
      }

      const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
      .setDescription('```0```')

      msg.channel.send({
          embed: embed,
          components: row
      }).then((message) => {
          let isWrong = false;
          let time = 120000;
          let value = "";
          let embed1 = new Discord.MessageEmbed()
          .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
          .setColor("BLACK")

          function createCollector(val, result = false) {
              let filter = (buttons1) => buttons1.clicker.user.id === msg.author.id && buttons1.id === "cal" + val;
              let collect = message.createButtonCollector(filter, { time: time });

              collect.on("collect", async x => {
                  x.reply.defer();

                  if (result === "new") value = "0"
                  else if (isWrong) {
                      value = val
                      isWrong = false;
                  }
                  else if (value === "0") value = val;
                  else if (result) {
                      isWrong = true;
                      value = mathEval(value);
                  }
                  else value += val

                  embed1.setDescription("```" + value + "```")
                  message.edit({
                      embed: embed1,
                      components: row
                  })
              })
          }

          for(let txt of text) {
              let result;
              if (txt === "clear") result = "new";
              else if (txt === "=") result = true;
              else result = false
              createCollector(txt, result)
          }

          setTimeout(() => {
              embed1.setDescription("Your Time for Using this Calculator is Running Out!")
              embed1.setColor("RED")
              message.edit({
                  embed: embed1
              })
          }, time)
      })

      function addRow(btns) {
          let row1 = new disbut.MessageActionRow()
          for(let btn of btns) {
              row1.addComponent(btn);
          }
          return row1;
      }

      function createButton(label, style = "grey") {
          if (label === "clear") style = "red"
          else if (label === ".") style = "grey"
          else if (label === "=") style = "green"
          else if (isNaN(label)) style = "blurple"

       const btn = new disbut.MessageButton()
       .setLabel(label)
       .setStyle(style)
       .setID("cal" + label)
       return btn;
    }
    
    function mathEval(input) {
        try {
            let res = math.evaluate(input)
            return res
        } catch {
            return "❌ Invalid Arguments, Sorry, An Unexpected Error has Occurred. ❌"
        }
    }
}
}