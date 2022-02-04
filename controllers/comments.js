const db = require('../models');

const newComment = (req, res) => {
    db.ActiveDream.findById(req.params.id, (err, foundDream) => {
        console.log(foundDream.Dreamer)
        if(err) res.send(err);
        res.render('comments/new', {
            dreamerId: foundDream.Dreamer, 
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
// const update = (req, res) => {
//     db.Comment.findByIdAndUpdate(req.params.id, {
//         $set: {
//             ...req.body,
//         },
//     },
//     {new: true},
//     (err, updatedComment) => 
//     )
// };

// delete a comment
const destroy = (req, res) => {

};



module.exports = {
    newComment,
    create,
    // show,
    // edit,
    // update,
    // delete: destroy
}