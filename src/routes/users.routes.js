const router = require("express").Router();
const { usersController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.post("/signup", usersController.signup);

router.use(isAuthorized);

router.get("/", usersController.list);
router.post("/update", usersController.update);
router.post("/vote", usersController.vote);
router.get("/myRating", usersController.myRating);
router.get("/deactivate", usersController.deactivate);
module.exports.users = router;
