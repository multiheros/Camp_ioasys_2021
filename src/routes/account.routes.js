const router = require("express").Router();
const { accountController } = require("../controllers");

router.post("/signup", accountController.signup);
module.exports.account = router;