const router = require('express').Router();
const ctrl = require('../controllers');
const { route } = require('./oauth');

router.get('/home', (req, res) => {
    res.redirect('/');
});

router.get('/', ctrl.dreamers.index);
router.get('/dreamers', ctrl.dreamers.dreams);
router.get('/about', ctrl.dreamers.about);
router.get('/how-to', ctrl.dreamers.howTo);
//router.get('new', ctrl.dreamers.newDreamer);
//router.get('/', ctrl.dreamers.showDreamer);
//router.post('/', ctrl.dreamers.createDreamer);
router.get('/:id/edit', ctrl.dreamers.edit);
router.put('/:id', ctrl.dreamers.update);
//router.delete('/:id', ctrl.dreamers.destroy);

//export routes
module.exports = router