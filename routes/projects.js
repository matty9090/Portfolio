var express = require('express');
var router = express.Router();
var projects = require('../app/projects')

router.get('/', function(req, res, next) {
    var proj = new projects();

    res.render('projects', {
        title: 'Matthew Lowe | Game Developer',
        page: 'projects',
        projects: proj.projects
    });
});

module.exports = router;
