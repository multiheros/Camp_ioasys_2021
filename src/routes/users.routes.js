const router = require("express").Router();
const { usersController } = require("../controllers");
const { userUpdateController } = require("../controllers");
const { signupController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.post("/signup", signupController.signup);

router.use(isAuthorized);

router.get("/", usersController.list);
router.post("/update", userUpdateController.update);
module.exports.users = router;
