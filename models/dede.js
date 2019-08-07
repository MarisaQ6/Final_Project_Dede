const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Dede = new Schema({
    username: String,
    password: String
});



module.exports = 