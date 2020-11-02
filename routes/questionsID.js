const express = require('express');
const router = express.Router();
const Questions = require('../database/models/questions');
const Response = require('../database/models/response');

router.get("/question/:id", (req, res) => {
	var id = req.params.id;
	Questions.findOne({
		where : { id: id }
	}).then((question)=> {
		if (question != undefined) {
			Response.findAll({
				where: { questionId: question.id }, 
				order: [ [ 'id', 'DESC' ] ]
			}).then(responses => {
				res.render("Questions/questionId", {
				 questionId: question,
				 responses: responses
				});
			})

		}else {
			res.redirect("/");
		}
	});
});

module.exports = router;