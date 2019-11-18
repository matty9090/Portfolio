var express = require('express');
var router = express.Router();
var projects = require('../app/projects')

router.get('/', function(req, res, next) {
    var proj = new projects();

    res.render('index', {
        title: 'Matthew Lowe | Game Developer',
        page: 'index',
        projects: proj.as_columns(3, 9)
    });
});

module.exports = router;
