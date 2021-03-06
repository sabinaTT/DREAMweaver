const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dreamerSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    profile: String,
    zipCode: Number,
    activeDreams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ActiveDream'
    }],
    inactiveDreams: [{
        type: String,
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
},
    {timestamps: true}
)

const Dreamer = mongoose.model('Dreamer', dreamerSchema);

module.exports = Dreamer;