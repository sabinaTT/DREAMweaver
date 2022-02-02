const router = require('express').Router();
const ctrl = require('../controllers');

//router.get('/', ctrl.dreams.index);
router.get('/profile', ctrl.dreams.profile);
router.get('/about', ctrl.dreams.about)
router.get('/dreams', ctrl.dreams.dreams)
router.get('/how-to', ctrl.dreams.howTo)

module.exports = router