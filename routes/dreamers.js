const router = require('express').Router();
const ctrl = require('../controllers');


//router.get('/', ctrl.dreamers.idx);
//router.get('new', ctrl.dreamers.newDreamer);
//router.get('/:id', ctrl.dreamers.showDreamer);
//router.post('/', ctrl.dreamers.createDreamer);
router.get('/:id/edit', ctrl.dreamers.edit);
//router.put(':/id', ctrl.dreamers.update);
//router.delete('/:id', ctrl.dreamers.destroy);

//export routes
module.exports = router