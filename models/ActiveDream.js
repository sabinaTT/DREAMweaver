const mongoose = require('mongoose');
const { Dreamer } = require('.');
const Schema = mongoose.Schema;

const activeDreamSchema = new Schema ({
    Dreamer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dreamer"
    },
    dream: {
        type: String,
        require: true
    },
    obstacle: [{
        type: String,
        require: true
    }],
    updates: [String],
    Comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    published: {
        type: Boolean,
        require: true
    },
    isComplete: Boolean,
},
    {timestamps: true}   
)

const ActiveDream = mongoose.model('ActiveDream', activeDreamSchema);

module.exports = ActiveDream;