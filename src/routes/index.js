const { auth } = require("./auth.routes");
const { users } = require("./users.routes");
const { account } = require("./account.routes");

module.exports = {
  auth,
  users,
  account,
};
