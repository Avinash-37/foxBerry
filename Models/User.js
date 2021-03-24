const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type:Number,
        default:null,
    },
    password: {
        type: String,
        required: true
    },
    jwtToken:{
        type: String,
        default:null
    },
    verified:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model("users", UserSchema);