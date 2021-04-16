const router = require("express").Router();
const { usersController } = require("../controllers");
const { userUpdateController } = require("../controllers");
const { signupController } = require("../controllers");
const { userVoteController } = require("../controllers");
const { userRatingController } = require("../controllers");
const { userDeactivateController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.post("/signup", signupController.signup);

router.use(isAuthorized);

router.get("/", usersController.list);
router.post("/update", userUpdateController.update);
router.post("/vote", userVoteController.vote);
router.get("/myRating", userRatingController.myRating);
router.get("/deactivate", userDeactivateController.deactivate);
module.exports.users = router;
