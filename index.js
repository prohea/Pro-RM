//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./util/genMd");

//Create an array of questions for user input
inquirer.prompt([
	{
		type: "input",
		name: "title",
		message: "What is your project title?",
	},
	{
		type: "input",
		name: "description",
		message: "Describe your project:",
	},
	{
		type: "input",
		name: "installation",
		message: "Enter installation instructions:",
	},
	{
		type: "input",
		name: "usage",
		message: "Enter usage information:",
	},
	{
		type: "input",
		name: "contribution",
		message: "Enter contribution guidelines:",
	},
	{
		type: "input",
		name: "test",
		message: "Enter test instructions:",
	},
	{
		type: "list",
		name: "licenses",
		message: "Choose a license:",
		choices: ["MIT", "Mozilla", "Eclipse", "Apache"],
	},
	{
		type: "input",
		name: "name",
		message: "Enter your GitHub username:",
	},
	{
		type: "input",
		name: "email",
		message: "Enter your email address:",
	},
]);

//Create a function to write README file
function writeToFile(fileName, data) {
	return new Promise((resolve, reject) => {
		fs.writeFile(fileName, data, (err) => {
			if (err) {
				reject(err);
				return;
			}

			resolve({
				ok: true,
				message: "File created!",
			});
		});
	});
}

//Create a function to initialize app
function init() {
	return inquirer.prompt(questions);
}

// Function call to initialize app
init()
	.then((answers) => {
		return writeToFile("./dist/README.md", generateMarkdown(answers));
	})
	.then((writeFileResponse) => {
		console.log(writeFileResponse);
	})
	.catch((err) => {
		console.log(err);
	});
