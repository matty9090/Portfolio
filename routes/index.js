var express = require('express');
var router = express.Router();
var projects = require('../app/projects')

/* GET home page. */
router.get('/', function(req, res, next) {
    var proj = new projects();

    res.render('index', {
        title: 'Matthew Lowe | Game Developer',
        page: 'index',
        projects: proj.as_columns(3)
    });
});

module.exports = router;
