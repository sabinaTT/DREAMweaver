const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    Dreamer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dreamer"
    },
    ActiveDream: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ActiveDream"
    },
    comment: {
        type: String,
        require: true
    }
},
    {timestamps: true}
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;