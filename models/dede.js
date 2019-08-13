const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const deDeSchema = new Schema({
    drinks: String,
    abv: String,
    calories: String,
    created_at: {type: Date, default: Date.now}
});


const Dede = mongoose.model("DeDe", deDeSchema);
module.exports = Dede;