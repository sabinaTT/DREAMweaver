const { ActiveDream } = require('../models');
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


// function dreams (req, res) {
//         db.Dreamer.find({}, function(err, dreamers) {
//             const context = {
//                 dreamers,
//                 title: "Dreamers"
//             };
            
//             res.render('dreamer/dreamers', context)
//         })
//     }

//index: home page, show login etc
function index (req, res, next){
        db.Dreamer.find({}, function(err, dreamers){
            
            const context = {
                dreamers, // I don't think we need this 'dreamers'
                user: req.user,
                title: "Home"
            };
            
            res.render('index', context);
            });
    };

// Show: About Page
function about (req, res) {
    const context = {
        user: req.user,
        title: "Aout"
    }

    res.render('about', context)
};

// Show: How-To page after user is logged in
function howTo (req, res) {
    // will need to add function to see if user if indeed logged in in order to make this visible
    const context = {
        user: req.user,
        title: "How-to"
    };

    res.render('dreamer/how-to', context)
};

//show
function showDreamer (req, res) {
    db.Dreamer.findById(req.params.id)
    .populate('activeDreams')
    .exec(function(err, foundDreamer){
        const context = {
            dreamer: foundDreamer, 
            user: req.user,
            title: "Profile"
            }
        res.render('dreamer/index', context);
    });
};

function showDreamersDreams (req, res) {
    db.Dreamer.findById(req.params.id)
    .populate("activeDreams")
    .exec((err, foundDreamer) => {
        if (err) res.send(err);

        const context = {
            dreamer: foundDreamer,
            title: "Dreams"};

        res.render("dreamer/index", context)
    })
}

//edit
const edit = (req, res) => {
    db.Dreamer.findById(req.params.id, (err, foundDreamer) => {
        if(err) res.send(err);

        const context = {
            dreamer: foundDreamer,
            title: "Edit Profile",
            user: req.user};

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
        {new: true,
        returnOriginal: false},
        function(err, updatedDreamer) {
            if(err) res.send(err);
            const context = {
                title: "Profile"
            }
            res.redirect(`/dreamers/${updatedDreamer._id}`)
        }
    )
}

//delete
const destroy = (req, res) => {
    db.Dreamer.findByIdAndDelete(req.body.Dreamer, (err, deletedDreamer) => {
        if (err) res.send(err);
        res.redirect("/")
            }
        )
};


module.exports = {
    index,
    showDreamer,
    showDreamersDreams,
    edit,
    update,
  //  dreams,
    about,
    howTo,
    destroy
}