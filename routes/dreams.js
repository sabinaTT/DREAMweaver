const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.dreams.index);

module.exports = router