const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.dreams.index);
router.get('/profile', ctrl.dreams.profile);
router.get('/about', ctrl.dreams.about)

module.exports = router