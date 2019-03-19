var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function (req, res, next) {
    var userName = req.body.userName;
    var password = req.body.password;

    if(userName == '123' && password == '123') {
        res.json({data: {}, message: '登陆成功!', code: 0});
        return;
    }
    res.json({data: {}, message: '登陆失败!', code: -1});
});

module.exports = router;
