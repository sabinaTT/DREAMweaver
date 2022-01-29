const DreamerModel = require("../models/Dreamer");

function index (req, res, next){
    DreamerModel.Dreamer.find({}, function(err, dreamers){
    res.render('index', {
        dreamers, 
        user: req.user
        });
    });
};

module.exports = {
    index,
}