//imports and requires
const router = require('express').Router();
const ctrl = require('../controllers');

//routes
// router.get("/", ctrl.dreams.idx);
router.get("/:id/new", ctrl.dreams.newDream);
router.post("/", ctrl.dreams.create);
router.get("/:id", ctrl.dreams.showDream);
// router.get("/:id/edit", ctrl.dreams.edit);
// router.put("/:id", ctrl.dreams.update);
// router.delete("/:id", ctrl.dreams.destroy);

//export routes
module.exports = router;