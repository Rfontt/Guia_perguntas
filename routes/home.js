const express = require('express');
const router = express.Router();
const Questions = require('../database/models/questions');

router.get("/", (req, res)=> {
	Questions.findAll({ raw: true, order: [
		[ 'id', 'DESC' ]
		] }).then(questions => {
		res.render("Home/index", {
			questions: questions
		});

	});
});

module.exports = router;