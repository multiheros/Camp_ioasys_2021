const router = require("express").Router();
const { adminUpdateController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.post("/update", adminUpdateController.update);
module.exports.admin = router;
