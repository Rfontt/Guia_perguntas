const express = require('express');
const router = express.Router();

router.get("/questions", (req, res) => {
	res.render("Questions/index");
});

module.exports = router;