const router = require("express").Router();
const { moviesController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.get("/", moviesController.list);
router.get("/details", moviesController.details);

router.use(isAuthorized);

router.post("/register", moviesController.register);
router.post("/update", moviesController.update);
router.get("/deactivate", moviesController.deactivate);
router.get("/reactivate", moviesController.reactivate);
module.exports.movies = router;
