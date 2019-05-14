var User = require("../model/user.js");
var Dao = require("../dao.js");

var userBiz = {
    insert(info) {
        Dao.insert(User, info);
    }
};

module.exports = userBiz;
