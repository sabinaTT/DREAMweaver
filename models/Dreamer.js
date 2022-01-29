const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dreamerSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    profile: String,
    zipCode: Number,
    activeDream: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ActiveDream'
    },
    inactiveDreams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'InactiveDream'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
},
    {timestamps: true}
)

const Dreamer = mongoose.model('Dream', dreamerSchema);

module.exports = {
    Dreamer,
}