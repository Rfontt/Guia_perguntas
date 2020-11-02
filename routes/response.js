const express = require('express');
const router = express.Router();
const tableResponse = require('../database/models/response');

router.post("/response", (req, res) => {
	var bodyofresponse = req.body.response;
	var id = req.body.responseId;

	tableResponse.create({
		body: bodyofresponse,
		questionId: id
	}).then(() => {
		res.redirect("/question/" + id);
	});
});

module.exports = router;