const db = require('../models');

const newComment = (req, res) => {
    db.ActiveDream.findById(req.params.id, (err, foundDream) => {
        //console.log(foundDream.Dreamer)
        if(err) res.send(err);
        res.render('comments/new', {
            user: req.user, 
            dreamId: req.params.id
        });
    })
};

// create a comment
const create = (req, res) => {
    db.Comment.create(req.body, (err, createdComment) => {

        if(err) res.send(err);

        db.ActiveDream.findById(createdComment.ActiveDream) 
            .exec(function (err, foundActiveDream) {
            if (err) res.send(err);

            foundActiveDream.Comments.push(createdComment);
            //save dreamer changes
            createdComment.save();
            foundActiveDream.save();

            res.redirect(`/dreams/${createdComment.ActiveDream}`)
        })
    })
};

// show individual comment
const show = (req, res) => {

};


// edit a comment
const edit = (req, res) => {

};

// update a comment
const update = (req, res) => {

};

// delete a comment
const destroy = (req, res) => {
    db.Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
        if(err) res.send(err);
        db.Dreamer.findById(deletedComment.Dreamer, (err, foundDreamer) => {
            console.log(deletedComment)
            foundDreamer.comments.remove(deletedComment);
            console.log("foundddddddddddddDreamer is: " + foundDreamer);
            foundDreamer.save();

            res.redirect(`/dreams/${deletedComment.ActiveDream}`)
        })
    })
};



module.exports = {
    newComment,
    create,
    // show,
    // edit,
    // update,
    destroy
}