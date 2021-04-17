const { auth } = require("./auth.routes");
const { users } = require("./users.routes");
const { movies } = require("./movies.routes");
const { admin } = require("./admin.routes");

module.exports = {
  auth,
  users,
  movies,
  admin,
};
