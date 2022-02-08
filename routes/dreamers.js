const router = require('express').Router();
const ctrl = require('../controllers');
const { route } = require('./oauth');

router.get('/home', (req, res) => {
    res.redirect('/');
});

router.get('/', ctrl.dreamers.index);
//router.get('/dreamers', ctrl.dreamers.dreams);
router.get('/about', ctrl.dreamers.about);
// router.get('/how-to', ctrl.dreamers.howTo);
router.get('/dreamers/:id', ctrl.dreamers.showDreamer);
router.get('/dreamers/dreams/:id', ctrl.dreamers.showDreamersDreams)
//router.get('new', ctrl.dreamers.newDreamer);
//router.get('/', ctrl.dreamers.showDreamer);
//router.post('/', ctrl.dreamers.createDreamer);
router.get('/dreamers/:id/edit', ctrl.dreamers.edit);
router.put('/dreamers/:id', ctrl.dreamers.update);
router.delete('/:id', ctrl.dreamers.destroy);

//export routes
module.exports = router