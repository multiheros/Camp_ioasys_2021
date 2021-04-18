const router = require("express").Router();
const { adminController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.post("/update", adminController.update);
router.get("/rating", adminController.rating);
module.exports.admin = router;
