const mongoose = require('mongoose');
const Schema = mongoose.Schema
//const autoIncrement = require("mongoose-auto-increment");

//autoIncrement.initialize(mongoose);

/*

    TEST SCHEMA OM GEWOON DE GEGEVENS VAN DE USER WEG TE SCHRIJVEN

*/


const UsersSchema = new Schema({
    id: Number,
    name: String,
    authId: String,
    role: String,
});

//UsersSchema.plugin(autoIncrement.plugin, { model: "Users", field: "id" });
module.exports =  Users = mongoose.model('users', UsersSchema);