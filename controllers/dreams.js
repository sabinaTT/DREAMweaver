const DreamerModel = require("../models/Dreamer");

function index (req, res, next){
    DreamerModel.find({}, function(err, dreamers){
    res.render('index', {
        dreamers, 
        user: req.user
        });
    });
};

module.exports = {
    index,
}