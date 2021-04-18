const { register } = require("./register.service");
const { list } = require("./list.service");
const { update } = require("./update.service");
const { deactivate } = require("./deactivate.service");
const { reactivate } = require("./reactivate.service");
const { details } = require("./details.service");

module.exports = {
  register,
  list,
  update,
  deactivate,
  reactivate,
  details,
};
