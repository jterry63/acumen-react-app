var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 	res.locals.connection.query("SELECT * FROM vle2lt3dz5ogjgdk.members", function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

router.post('/new', function(req, res, next) {
    res.locals.connection.query(`insert into vle2lt3dz5ogjgdk.members(name, surname, email) values('${req.body.name}', '${req.body.surname}', '${req.body.email}')`, function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;
