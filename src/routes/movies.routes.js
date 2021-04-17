const router = require("express").Router();
const { moviesController } = require("../controllers");
const { listMoviesController } = require("../controllers");
const { moviesUpdateController } = require("../controllers");
const { movieDeactivateController } = require("../controllers");
const { movieReactivateController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.get("/", listMoviesController.list);

router.use(isAuthorized);

router.post("/register", moviesController.register);
router.post("/update", moviesUpdateController.update);
router.get("/deactivate", movieDeactivateController.deactivate);
router.get("/reactivate", movieReactivateController.reactivate);
module.exports.movies = router;
