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

//index: home page, show login etc
function index (req, res, next){
        db.Dreamer.find({}, function(err, dreamers){
            res.render('index', {
                dreamers, // I don't think we need this 'dreamers'
                user: req.user
                });
            });
    };

//show
// function showDreamer (req, res) {
//     db.Dreamer.find({}, function(err, foundDreamer){
//         console.log(req.params)
//         res.render('dreamer/profile', { 
//             user: req.user
//             });
//         });
// };

//edit
const edit = (req, res) => {
    db.Dreamer.findById(req.params.id, (err, foundDreamer) => {
        if(err) res.send(err);

        const context = {dreamer: foundDreamer};
        res.render('dreamer/edit', context)
    });
};


module.exports = {
    index,
    // showDreamer,
    edit,
}