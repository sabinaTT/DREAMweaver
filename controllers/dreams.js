const db=require('../models')

// Rest Routes
/*
 * Index - GET - /dreams  - Presentational - respond with all dreams
 * New - GET - /dreams/new  - Presentational Form - a page with a form to create a new dream
 * Show - GET - /dreams/:id  - Presentational - respond with specific dream by id
 * Create - Post - /dreams  - Functional - recieve data from new route to create a dream
 * Edit - GET - /dreams/:id/edit  - Presentational Form - respond with a form prefilled with dream data
 * Update - PUT - /dreams/:id  - Functional - recieve data from edit to update a specific dream
 * Delete - DELETE - /dreams/:id  - Functional - Deletes dream by id from request
 */

const index = (req, res) => {
    db.ActiveDream.find({}, (err, foundDreams) => {
        if(err) res.send(err);
        const context = { 
            dreams: foundDreams,
            user: req.user,
            title: "Dreams"
        };
        res.render("dreams/index", context)
    })
}

//show
const showDream = (req, res) => {
    db.ActiveDream.findById(req.params.id)
        .populate("Dreamer")
        .exec((err, foundDream) => {
            if(err) res.send(err);
           
            db.Comment.find({ActiveDream: foundDream._id}, function (err, foundComments){

                const context = {
                    dream: foundDream,
                    comments: foundComments,
                    user: req.user,
                    title: "Dream"
                };
                res.render("dreams/show", context)
            })
        })
}



//new
const newDream = (req, res) => {
    // console.log("line 17: " + req.params.id)
    db.Dreamer.findById(req.params.id, (err, foundDreamer) => {
        if(err) res.send(err);

        const context = {
            dreamer: foundDreamer,
            user: req.user,
            title: "New Dream"};
        res.render("dreams/new", context)
    })
}

//create
const create = (req, res) => {
    console.log(req.body);
    db.ActiveDream.create(req.body, (err, createdDream) => {

        if(err) res.send(err);

        db.Dreamer.findById(createdDream.Dreamer) 
            .exec(function (err, foundDreamer) {
            if (err) res.send(err);
            //add created Dream to dreamer's activeDream
            foundDreamer.activeDreams.push(createdDream);
            //save dreamer changes
            createdDream.save();
            foundDreamer.save();
            const context = {
                title: "Dreams"
            };
            res.redirect('/dreams', context)
        })
    })
}
//edit
const edit = (req, res) => {
    db.ActiveDream.findById(req.params.id, (err, foundDream) => {
        if(err) res.send(err);

        const context = {
            dream: foundDream,
            user: req.user,
            title: "Edit Dream"
        }
        res.render("dreams/edit", context)
    }
    )}

//update
const update = (req, res) => {
    db.ActiveDream.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body
            },
        },
        {new: true},
        (err, updatedDream) => {
            if(err) res.send(err);
            const context = {
                title: "Dream"
            };
            res.redirect(`/dreams/${updatedDream._id}`, context);
        }
    )
}

//destroy
const destroy = (req, res) => {
    db.ActiveDream.findByIdAndDelete(req.params.id, (err, deletedActiveDream) => {
        if(err) res.send(err);

        db.Dreamer.findById(deletedActiveDream.Dreamer, (err, foundDreamer) => {

            foundDreamer.activeDreams.remove(deletedActiveDream);
            foundDreamer.save();
            const context = {
                title: "Dreams"
            };
            res.redirect('/dreams', context)
        })
    })
}

module.exports = {
    showDream,
    index,
    newDream,
    create,
    edit,
    update,
    destroy,
}