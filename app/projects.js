var path = require('path');
fs = require('fs');

class Projects {
    constructor() {
        this.projects = [];
        var dir = './app/projects';
        var files = fs.readdirSync(dir);

        files.forEach(file => {
            var fname = file.split('.')[0];
            var len = this.projects.push(JSON.parse(fs.readFileSync(dir + '/' + file)));
            this.projects[len - 1].img = `img/${fname}.mp4`;
        });

        this.projects.sort(function(a, b) {
            return a.priority - b.priority;
        });
    }

    as_columns(columns) {
        var cols = [];

        for(let i = 0; i < columns; ++i) {
            var col = [];

            for(let j = i; j < this.projects.length; j += columns)
                col.push(this.projects[j]);
            
            if(col.length > 0)
                cols.push(col);
        }

        return cols;
    }
}


module.exports = Projects;