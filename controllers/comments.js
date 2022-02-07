const db = require('../models');

const newComment = (req, res) => {
    db.ActiveDream.findById(req.params.id)
    .populate("Dreamer")
    .exec((err, foundDream) => {
        if(err) res.send(err);
        db.Comment.find({
            ActiveDream: foundDream._id
        }, function (err, foundComments) {
            const context = {
                user: req.user, 
                dream: foundDream,
                comments: foundComments,
                title: "New Comment"
            }
            res.render('comments/new', context);
        })
       
    })
};

// create a comment
const create = (req, res) => {
    db.Comment.create(req.body, (err, createdComment) => {
        console.log("req body comment: " + req.body.comment)
        if(err) res.send(err);
        console.log("created comment" + createdComment)
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
    db.Comment.findById(req.params.id)
    .exec((err, foundComment) => {
        if(err) res.send(err);
        db.ActiveDream.findById(foundComment.ActiveDream)
            .populate("Dreamer")
            .exec((err, foundDream) => {
                if(err) res.send(err);
                db.Comment.find({
                    ActiveDream: foundDream._id
                }, function(err, foundComments) {
                    const context = { 
                        comment: foundComment,
                        comments: foundComments,
                        dream: foundDream,
                        user: req.user,
                        title: "Edit Comment"
                    };
                    res.render("comments/edit", context)

                })
                
            });
    });
}

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
        db.ActiveDream.findById(deletedComment.ActiveDream, (err, foundDream) => {
            foundDream.Comments.remove(deletedComment);
            foundDream.save();
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