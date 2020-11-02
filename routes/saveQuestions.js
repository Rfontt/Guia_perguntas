const express = require('express');
const router = express.Router();
const Questions = require('../database/models/questions');

router.post("/savequestions", (req, res) => {
	var title = req.body.title;
	var description = req.body.Description;

	Questions.create({
		title: title,
		description: description
	}).then(()=> {
		res.redirect("/");
	})
});

module.exports = router;