const { list } = require("./list.service");
const { update } = require("./update.service");
const { signup } = require("./signup.service");
const { vote } = require("./vote.service");
const { myRating } = require("./myRating.service");
const { deactivate } = require("./deactivate.service");

module.exports = {
  list,
  update,
  signup,
  vote,
  myRating,
  deactivate
};
