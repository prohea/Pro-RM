//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./util/genMd");

//Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is your project title?",
		validate: (titleInput) => {
			if (titleInput) {
				return true;
			} else {
				console.log("Please enter a title!");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "description",
		message: "Describe your project:",
		validate: (descriptionInput) => {
			if (descriptionInput) {
				return true;
			} else {
				console.log("Please enter a description!");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "installation",
		message: "Enter installation instructions:",
		validate: (installInput) => {
			if (installInput) {
				return true;
			} else {
				console.log("Please enter installation instructions!");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "usage",
		message: "Enter usage information:",
		validate: (usageInput) => {
			if (usageInput) {
				return true;
			} else {
				console.log("Please enter usage information!");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "contribution",
		message: "Enter contribution guidelines:",
		validate: (contributeInput) => {
			if (contributeInput) {
				return true;
			} else {
				console.log("Please enter contribution or n/a!");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "test",
		message: "Enter test instructions:",
		validate: (testInput) => {
			if (testInput) {
				return true;
			} else {
				console.log("Please enter test instructions!");
				return false;
			}
		},
	},
	{
		type: "list",
		name: "licenses",
		message: "Choose a license:",
		choices: ["MIT", "Mozilla", "Eclipse", "Apache"],
		validate: (licenseInput) => {
			if (licenseInput) {
				return true;
			} else {
				console.log("Please select an option!");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "name",
		message: "Enter your GitHub username:",
		validate: (nameInput) => {
			if (nameInput) {
				return true;
			} else {
				console.log("Please enter a username!");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "email",
		message: "Enter your email address:",
		validate: (emailInput) => {
			if (emailInput) {
				return true;
			} else {
				console.log("Please enter an email address!");
				return false;
			}
		},
	},
];

//Create a function to write README file
function writeToFile(fileContent) {
	return new Promise((resolve, reject) => {
		fs.writeFile("README.md", fileContent, (err) => {
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
	inquirer.prompt(questions).then(function (userInput) {
		console.log(userInput);
		var readmeData = generateMarkdown(userInput);
		writeToFile(readmeData);
	});
}

// Function call to initialize app
init();
