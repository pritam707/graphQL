// Importing mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let User;

const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
})

User = module.exports = mongoose.model('user', UserSchema)