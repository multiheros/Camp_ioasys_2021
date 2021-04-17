const authService = require("./auth");
const usersService = require("./users");
const signupService = require("./users");
const moviesService = require("./movies");
const userUpdateService = require("./users");
const listMoviesService = require("./movies");
const moviesUpdateService = require("./movies");
const userVoteService = require("./users");
const userRatingService = require("./users");
const userDeactivateService = require("./users");
const movieDeactivateService = require("./movies");
const movieReactivateService = require("./movies");
const adminUpdateService = require("./admin");

module.exports = {
  authService,
  usersService,
  signupService,
  moviesService,
  userUpdateService,
  listMoviesService,
  moviesUpdateService,
  userVoteService,
  userRatingService,
  userDeactivateService,
  movieDeactivateService,
  movieReactivateService,
  adminUpdateService,
};
