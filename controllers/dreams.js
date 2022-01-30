const DreamerModel = require("../models/Dreamer");

console.log(DreamerModel)

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