const db = require('../config/mysql.js')();

module.exports = function (app) {

    app.get('/api', function (req, res) {
        if (req.query.id) {
            db.query(`SELECT * FROM ostebiks.oste WHERE oste.id = ?;`,[req.query.id], function(err, results){
                if (err) throw new error(err);
                res.set('Content-Type', 'application/json');
                res.send(results);
            });
        } else {
            db.query(`SELECT oste.id, oste.navn FROM ostebiks.oste;`,[req.params.id], function(err, results){
                if (err) throw new error(err);
                res.set('Content-Type', 'application/json');
                res.send(results);
            });
        }
    });
};