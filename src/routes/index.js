const { auth } = require("./auth.routes");
const { users } = require("./users.routes");
const { account } = require("./account.routes");
const { movies } = require("./movies.routes")

module.exports = {
  auth,
  users,
  account,
  movies,
};
