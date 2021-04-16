const usersController = require("./users.controller");
const userUpdateController = require("./userUpdate.controller")
const authController = require("./auth.controller");
const signupController = require("./signup.controller");
const moviesController = require("./movies.controller")
const listMoviesController = require("./listMovies.controller")
const moviesUpdateController = require("./moviesUpdate.controller")
const userVoteController = require("./userVote.controller")
const userRatingController = require("./userRating.controller");
const userDeactivateController = require("./userDeactivate.Controller");
const movieDeactivateController = require("./movieDeactivateController");

module.exports = {
  usersController,
  authController,
  signupController,
  moviesController,
  userUpdateController,
  listMoviesController,
  moviesUpdateController,
  userVoteController,
  userRatingController,
  userDeactivateController,
  movieDeactivateController
};
