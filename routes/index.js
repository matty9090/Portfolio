var express = require('express');
var router = express.Router();
var projects = require('../app/projects')

/* GET home page. */
router.get('/', function(req, res, next) {
    var projs = projects.list();

    console.log(projs);

    res.render('index', {
        title: 'Matthew Lowe | Game Developer',
        page: 'index',
        projects: projs
    });
});

module.exports = router;
