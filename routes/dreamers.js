const router = require('express').Router();
const ctrl = require('../controllers');


router.get('/', ctrl.dreamers.dreams);
router.get('/home', ctrl.dreamers.index);
router.get('/about', ctrl.dreamers.about)
//router.get('new', ctrl.dreamers.newDreamer);
//router.get('/', ctrl.dreamers.showDreamer);
//router.post('/', ctrl.dreamers.createDreamer);
router.get('/:id/edit', ctrl.dreamers.edit);
router.put('/:id', ctrl.dreamers.update);
//router.delete('/:id', ctrl.dreamers.destroy);

//export routes
module.exports = router