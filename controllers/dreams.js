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
        const context = { dreams: foundDreams };
        console.log("line 18: " + foundDreams)
        res.render("dreams/index", context)
    })
}

//new
const newDream = (req, res) => {
    console.log("line 17: " + req.params.id)
    db.Dreamer.findById(req.params.id, (err, foundDreamer) => {
        if(err) res.send(err);
        const context = {dreamer: foundDreamer};
        // console.log("line 21: " + foundDreamer)
        res.render("dreams/new", context)
    })
}

//create
const create = (req, res) => {
    db.ActiveDream.create(req.body, (err, createdDream) => {
        if(err) res.send(err);
        //links activeDream to Dreamer
        console.log("line 30: " + createdDream._id)
        console.log("line 31: " + createdDream.Dreamer)
        console.log("line 32: " + createdDream)
        db.Dreamer.findById(createdDream.Dreamer) 
            .exec(function (err, foundDreamer) {
            if (err) res.send(err);
            //add created Dream to dreamer's activeDream
            console.log("line 34: " + createdDream);
            console.log("line 36: " + foundDreamer)
            foundDreamer.inactiveDreams.push(createdDream);
            //save dreamer changes
            createdDream.save();
            console.log(createdDream);
            res.redirect('/dreams')
        })
    })
}




module.exports = {
    index,
    newDream,
    create,
}