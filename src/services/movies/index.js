const { register } = require("./register.service");
const { list } = require("./list.service");
const { update } = require("./update.service");
const { deactivate } = require("./deactivate.service");
module.exports = {
    register,
    list,
    update,
    deactivate
};