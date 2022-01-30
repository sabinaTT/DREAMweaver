const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    Dreamer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dreamer"
    },
    InactiveDream: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "InactiveDream"
    },
    ActiveDream: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ActiveDream"
    }
},
    {timestamps: true}
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;