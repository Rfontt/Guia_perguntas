const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const routerHome = require('./routes/home');
const routerQuestions = require('./routes/questions');
const routerSaveQuestions = require('./routes/saveQuestions');
const routerQuestionsID = require('./routes/questionsID');
const routerResponse = require('./routes/response');

connection
	.authenticate().then(()=> {
		console.log("Connected");
	}).catch((error)=> {
		console.log(error);
	})

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routerHome);
app.use("/", routerQuestions);
app.use("/", routerSaveQuestions);
app.use("/", routerQuestionsID);
app.use("/", routerResponse);

app.listen(8080);
