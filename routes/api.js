var express = require('express');
var sqlite = require('sqlite3')

var router = express.Router();
var response = { "success" : true, "message": "" };

router.post('/zombie/submit', function(req, res) {
    var db = new sqlite.Database('./bin/Zombie.db', sqlite.OPEN_READWRITE, (err) => {
        if (err)
        {
            response.success = false;
            response.message = "Could not connect to DB";
            res.send(JSON.stringify(response));
        }
        else
        {
            if (!req.body.name || req.body.name.trim().length < 3 || !req.body.score)
            {
                response.success = false;
                response.message = "Error";
                res.send(JSON.stringify(response));
                return;
            }
            
            var name  = req.body.name.trim();
            var score = parseInt(req.body.score);
            var time  = parseInt(new Date().getTime() / 1000);

            db.run('INSERT INTO Scores (name, score, date) VALUES (?, ?, ?)', [name, score, time], (err) => {
                if (err)
                {
                    response.success = false;
                    response.message = "Error inserting into db: " + err.message;
                }
                else
                {
                    response.success = true;
                    response.message = "Success";
                }
            
                res.send(JSON.stringify(response));
            });
        }
    });
});

router.post('/zombie/leaderboard', function(req, res) {
    var db = new sqlite.Database('./bin/Zombie.db', sqlite.OPEN_READONLY, (err) => {
        if (err)
        {
            response.success = false;
            response.message = "Could not connect to DB";
            res.send(JSON.stringify(response));
        }
        else
        {
            db.all('SELECT * FROM Scores ORDER BY `score` DESC', (err, rows) => {
                if (err)
                {
                    response.success = false;
                    response.message = "Error";
                    res.send(JSON.stringify(response));
                    return;
                }
                else
                {
                    response.scores = rows;
                    response.message = "Success";
                    res.send(JSON.stringify(response));
                }
            });
        }
    });
});

router.get('/zombie/download', function(req, res) {
    res.download('./bin/zombie.db');
});

module.exports = router;
