const db = require('../models');

const newComment = (req, res) => {
    res.render('comments/new');
};

// create a comment
const create = (req, res) => {

};

// show individual comment
const show = (req, res) => {

};


// edit a comment
const edit = (req, res) => {

};

// update a comment
const update = (req, res) => {

};

// delete a comment
const destroy = (req, res) => {

};



module.exports = {
    newComment,
    create,
    // show,
    // edit,
    // update,
    // delete: destroy
}