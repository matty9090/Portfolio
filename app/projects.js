var path = require('path');
fs = require('fs');

class Projects {
    constructor() { }

    static list() {
        var projs = [];
        var dir = './app/projects';
        var files = fs.readdirSync(dir);

        files.forEach(file => {
            var fname = file.split('.')[0];
            var len = projs.push(JSON.parse(fs.readFileSync(dir + '/' + file)));
            projs[len - 1].img = `img/${fname}.mp4`;
        });

        return projs;
    }
}


module.exports = Projects;