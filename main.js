const Discord = require('discord.js');
require('dotenv').config();
const config = require('./package.json');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const mongoose = require('mongoose');
require('discord-buttons')(client);
const colors = require("colors")

const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./Config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.config = require("./config.json");

const prefix = '?';

const fs = require('fs');
const logger = require('./Events/Client/logger');

const keepAlive = require('./server.js')

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
   require(`./Handlers/${handler}`)(client, Discord);
})

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to the MongoDB Database!');
}).catch((err) => {
    console.log(err);
})

client.ticketTranscript = mongoose.model('transcripts', 
new mongoose.Schema({
    Channel : String,
    Content : Array
})
)

client.on('message', async(msg) => {
    if(msg.channel.parentID !== '875786740101697606') return;
    client.ticketTranscript.findOne({ Channel: msg.channel.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            console.log('Data successfully found!')
            data.Content.push(`${msg.author.tag} : ${msg.content}`)
        } else {
            console.log('Data not available from MongoDB.')
            data = new client.ticketTranscript({ Channel : msg.channel.id, Content: `${msg.author.tag} : ${msg.content}`})
        }
        await data.save()
        .catch(err => console.log(err))
        console.log('Data successfully Autosaved to MongoDB!')
    })
  })

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}

client.login(process.env.DISCORD_TOKEN);
require("./Events/Client/logger")(client);
keepAlive();
