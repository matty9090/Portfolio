var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Matthew Lowe | Game Developer',
        page: 'contact'
    });
});

module.exports = router;
