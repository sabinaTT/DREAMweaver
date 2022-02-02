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
    db.Dreamer.find({}, function(err, foundDreamer){
        res.render('dreamer/profile', { 
            user: req.user
            });
        });
};

function about (req, res) {
    res.render('about')
};

module.exports = {
    index,
    profile, 
    about,
}