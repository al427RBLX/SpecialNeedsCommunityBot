const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    guildid: String,
    user: String,
    content: Array
})

const model = mongoose.model("warns", Schema);

module.exports = model;