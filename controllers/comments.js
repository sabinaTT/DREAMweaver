const db = require('../models');

const newComment = (req, res) => {
    db.ActiveDream.findById(req.params.id, (err, foundDream) => {
        if(err) res.send(err);
        const context = {
            user: req.user, 
            dreamId: req.params.id,
            title: "New Comment"
        }
        res.render('comments/new', context);
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

// edit a comment
const edit = (req, res) => {
    db.Comment.findById(req.params.id, (err, foundComment) => {
        if(err) res.send(err);

        const context = { 
            comment: foundComment,
            title: "Edit Comment"}

        res.render("comments/edit", context)
    });
};

// update a comment
const update = (req, res) => {
    db.Comment.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body,    
            },
        },
        { new: true },
        (err, updatedComment) => {
            if(err) res.send(err);

            res.redirect(`/dreams/${updatedComment.ActiveDream}`);
        }
    );
};

// delete a comment
const destroy = (req, res) => {
    db.Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
        if(err) res.send(err);
        db.Dreamer.findById(deletedComment.Dreamer, (err, foundDreamer) => {
            foundDreamer.comments.remove(deletedComment);
            foundDreamer.save();

            res.redirect(`/dreams/${deletedComment.ActiveDream}`)
        })
    })
};



module.exports = {
    newComment,
    create,
    edit,
    update,
    destroy,
}