const db = require("../models");

function index (req, res, next){
    db.Dreamer.find({}, function(err, dreamers){
        res.render('index', {
            dreamers, // I don't think we need this 'dreamers'
            user: req.user
            });
        });
};

function profile (req, res) {
    console.log(req.params)
    db.Dreamer.find({}, function(err, foundDreamer){
        res.render('dreamer/profile', { 
            user: req.user
            });
        });
};

module.exports = {
    index,
    profile, 
}