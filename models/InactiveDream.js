const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inactiveDreamSchema = new Schema ({
    Dreamer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dreamer"
    },
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

const InactiveDream = mongoose.model("InactiveDream", inactiveDreamSchema);

module.exports = InactiveDream;