var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('cv', {
        title: 'Matthew Lowe | Game Developer',
        page: 'cv'
    });
});

module.exports = router;
