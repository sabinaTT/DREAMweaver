const db = require("../models");

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


// function index (req, res, next){
//     db.Dreamer.find({}, function(err, dreamers){
//         res.render('index', {
//             dreamers, // I don't think we need this 'dreamers'
//             user: req.user
//             });
//         });
// };


function profile (req, res) {
    console.log(req.params)
    db.Dreamer.find({}, function(err, foundDreamer){
        res.render('dreamer/profile', { 
            user: req.user
            });
        });
};

// function about (req, res) {
//     res.render('about')
// };

// function dreams (req, res) {
//     db.Dreamer.find({}, function(err, dreamers) {
//         res.render('dreamer/dreamers', {
//             dreamers
//         })
//     })
// }

// function howTo (req, res) {
//     res.render('dreamer/how-to')
// };

module.exports = {
    // index,
    profile, 
    // about,
    // dreams,
    // howTo,
}