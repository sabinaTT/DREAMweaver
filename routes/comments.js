const router = require('express').Router();
const ctrl = require('../controllers');

router.post("/", ctrl.comments.create);
// router.get("/:id", ctrl.comments.show);
// router.get("/:id/edit", ctrl.comments.edit);
// router.put("/:id", ctrl.comments.update);
// // router.delete("/:id", ctrl.dreams.destroy);

module.exports = router;