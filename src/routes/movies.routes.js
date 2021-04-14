const router = require("express").Router();
const { moviesController } = require("../controllers");
const { listMoviesController } = require("../controllers")
const { isAuthorized } = require("../middlewares");

router.get("/", listMoviesController.list);

router.use(isAuthorized);

router.post("/register", moviesController.register);
module.exports.movies = router;
