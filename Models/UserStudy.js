const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserStudySchema = new Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    subject_id: {
        type:Schema.Types.ObjectId,
        ref:"subjects"
    },
    status:{
        type:String,
        default:null,
    },
    completed_at:{
        type:Date,
        default:null
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model("user-study", UserStudySchema);