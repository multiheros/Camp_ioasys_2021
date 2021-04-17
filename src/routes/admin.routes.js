const router = require("express").Router();
const { adminController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.post("/update", adminController.update);
module.exports.admin = router;
