var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    let info = {a: 555555555};
    res.json({data: info, message: '', code: 0});
});

module.exports = router;
