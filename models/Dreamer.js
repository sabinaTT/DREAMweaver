const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dreamerSchema = new Schema({
    name: String,
    profile: String,
    activeDream: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dream'
    },
    inactiveDreams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dream'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],

})