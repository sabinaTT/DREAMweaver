const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/:id/new', ctrl.comments.newComment);
router.post("/:id/create", ctrl.comments.create);
// router.get("/:id", ctrl.comments.show);
router.get("/:id/edit", ctrl.comments.edit);
router.put("/:id", ctrl.comments.update);
// // router.delete("/:id", ctrl.comments.destroy);

module.exports = router;