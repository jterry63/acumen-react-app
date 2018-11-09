var express = require('express');
var router = express.Router();

/* GET all surveys */
router.get('/', function(req, res, next) {
 	res.locals.connection.query("SELECT * FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

/* POST new surveys */
router.post('/new', function(req, res, next) {
    res.locals.connection.query(`insert into vle2lt3dz5ogjgdk.surveys(question1_value, question1_comment, question2_value, question2_comment, question3_value, question3_comment, question4_value, question4_comment, question5_value, question5_comment, question6_value, question6_comment, question7_value, question7_comment, question8_comment) values(${req.body.question1_value}, '${req.body.question1_comment}', ${req.body.question2_value}, '${req.body.question2_comment}', ${req.body.question3_value}, '${req.body.question3_comment}', ${req.body.question4_value}, '${req.body.question4_comment}', ${req.body.question5_value}, '${req.body.question5_comment}', ${req.body.question6_value}, '${req.body.question6_comment}', ${req.body.question7_value}, '${req.body.question7_comment}', '${req.body.question8_comment}')`, function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

/* GET total tallies of 1-5 ratings per question */

/* question 1 */

router.get('/q1t1', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question1_value = 1 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q1t2', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question1_value = 2 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q1t3', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question1_value = 3 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q1t4', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question1_value = 4 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q1t5', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question1_value = 5 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

/* question 2 */

router.get('/q2t1', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question2_value = 1 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q2t2', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question2_value = 2 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q2t3', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question2_value = 3 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q2t4', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question2_value = 4 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q2t5', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question2_value = 5 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

/* question 3 */

router.get('/q3t1', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question3_value = 1 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q3t2', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question3_value = 2 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q3t3', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question3_value = 3 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q3t4', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question3_value = 4 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q3t5', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question3_value = 5 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

/* question 4 */

router.get('/q4t1', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question4_value = 1 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q4t2', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question4_value = 2 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q4t3', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question4_value = 3 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q4t4', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question4_value = 4 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q4t5', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question4_value = 5 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

/* question 5 */

router.get('/q5t1', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question5_value = 1 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q5t2', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question5_value = 2 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q5t3', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question5_value = 3 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q5t4', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question5_value = 4 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q5t5', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question5_value = 5 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

/* question 6 */

router.get('/q6t1', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question6_value = 1 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q6t2', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question6_value = 2 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q6t3', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question6_value = 3 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q6t4', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question6_value = 4 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q6t5', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question6_value = 5 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

/* question 7 */

router.get('/q7t1', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question7_value = 1 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q7t2', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question7_value = 2 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q7t3', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question7_value = 3 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q7t4', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question7_value = 4 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});

router.get('/q7t5', function(req, res, next) {
    res.locals.connection.query("SELECT SUM(case when question7_value = 5 then 1 else 0 end) AS total FROM vle2lt3dz5ogjgdk.surveys", function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   });
});



module.exports = router;