var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('projects', { title: 'Matthew Lowe | Game Developer', 'page': 'projects' });
});

module.exports = router;
