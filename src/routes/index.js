var express = require('express');
var router = express.Router();
// var userBiz = require('../db/biz/userBiz');

/* GET home page. */
router.get('/index', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    let info = {a: 555555555};
    // userBiz.insert({
    //     username : 'Tracy McGrady',                 //用户账号
    //     userpwd: 'abcd',                            //密码
    //     userage: 37,                                //年龄
    //     logindate : new Date()                      //最近登录时间
    // });
    res.json({data: info, message: '', code: 0});
});

module.exports = router;
