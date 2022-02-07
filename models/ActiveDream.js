const mongoose = require('mongoose');
//const { Dreamer } = require('.');
const Schema = mongoose.Schema;

const activeDreamSchema = new Schema ({
    Dreamer: {
        type: mongoose.Schema.Types.ObjectId,
    },
    dream: [{
        type: String,
        require: true
    }],
    obstacle: [{
        type: String,
        //require: true
    }],
    Comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    published: {
        type: String,
        // require: true
    },
    isComplete: String,
},
    {timestamps: true}   
)

const ActiveDream = mongoose.model('ActiveDream', activeDreamSchema);

module.exports = ActiveDream;