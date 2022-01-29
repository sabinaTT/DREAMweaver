const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dreamerSchema = new Schema({
    name: String,
    profile: String,
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
    zipCode: Number,
},
    {timestamps: true}
)

