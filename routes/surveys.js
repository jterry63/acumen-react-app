var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 	res.locals.connection.query("SELECT * FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

router.post('/new', function(req, res, next) {
    res.locals.connection.query(`insert into vle2lt3dz5ogjgdk.surveys(question1_value, question1_comment, question2_value, question2_comment, question3_value, question3_comment, question4_value, question4_comment, question5_value, question5_comment, question6_value, question6_comment, question7_value, question7_comment, question8_comment) values(${req.body.question1_value}, '${req.body.question1_comment}', ${req.body.question2_value}, '${req.body.question2_comment}', ${req.body.question3_value}, '${req.body.question3_comment}', ${req.body.question4_value}, '${req.body.question4_comment}', ${req.body.question5_value}, '${req.body.question5_comment}', ${req.body.question6_value}, '${req.body.question6_comment}', ${req.body.question7_value}, '${req.body.question7_comment}', '${req.body.question8_comment}')`, function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;