const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    User: String,
    Birthday: String,
});

const model = mongoose.model("birthday", Schema);

module.exports = model;