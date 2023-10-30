const fs = require('fs');

module.exports = (client, Discord) => {
    const load_dir = (dirs) => {
    const command_files = fs.readdirSync(`./Commands/${dirs}`).filter(file => file.endsWith('.js'))

    for(const file of command_files) {
    const command = require(`../Commands/${dirs}/${file}`);
    if(command.name) {
        client.commands.set(command.name, command);
    } else {
        continue;
    }
    }
}

['Economy', 'Games', 'General', 'Information', 'Moderation', 'Utils', 'Birthday', 'Group'].forEach(e => load_dir(e));
}