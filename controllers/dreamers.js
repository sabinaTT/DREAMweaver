const db = require('../models');

// Rest Routes
/*
 * Index - GET - /dreamers  - Presentational - respond with all dreamers
 * New - GET - /dreamers/new  - Presentational Form - a page with a form to create a new dreamer
 * Show - GET - /dreamers/:id  - Presentational - respond with specific dreamer by id
 * Create - Post - /dreamers  - Functional - recieve data from new route to create a dreamer
 * Edit - GET - /dreamers/:id/edit  - Presentational Form - respond with a form prefilled with dreamer data
 * Update - PUT - /dreamers/:id  - Functional - recieve data from edit to update a specific dreamer
 * Delete - DELETE - /dreamers/:id  - Functional - Deletes dreamer by id from request
 */



//edit
const edit = (req, res) => {
    db.Dreamer.findById(req.params.id, (err, foundDreamer) => {
        if(err) res.send(err);

        const context = {dreamer: foundDreamer};
        res.render('dreamer/edit', context)
    });
};

//update
const update = (req, res) => {
    db.Dreamer.findOneAndUpdate(
        {_id: req.params.id},
        {
            $set: {
                ...req.body,
            },
        },
        {new: true},
        (err, updatedDreamer) => {
            if(err) res.send(err);
            res.redirect(`/dreamer/${updatedDreamer._id}`)
        }
    )
}

module.exports = {
    edit,
    update,
}