const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    name:{
        type: String,
        require:true,
    },
    files: {
        type: String,
    },
    video:{
        type:String,
        default:null,
    },
    time:{
        type:Date,
        default:null
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model("subjects", SubjectSchema);