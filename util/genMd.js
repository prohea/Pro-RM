const fs = require("fs");

//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	let badge = "";

	if (license == "MIT") {
		return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
	} else if (license == "Mozilla") {
		return "![License: MPL](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
	} else if (license == "Eclipse") {
		return "![License: Eclipse](https://img.shields.io/badge/License-EPL_1.0-red.svg)"
	} else if (license == "Apache") {
		return "![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
	} else {
		badge = "";
	}
	return badge;
}

//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	let licenseLink = "";

	if (license == "MIT") {
		return "[MIT](https://opensource.org/licenses/MIT)";
	} else if (license == "Mozilla") {
		return "[Mozilla](https://opensource.org/licenses/MPL-2.0)";
	} else if (license == "Eclipse") {
		return "[Eclipse](https://opensource.org/licenses/EPL-1.0)";
	} else if (license == "Apache") {
		return "[Apache](https://opensource.org/licenses/Apache-2.0)";
	} else {
		licenseLink = "";
	}
	return licenseLink;
}

//Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	let licenseSection = "";

	if (license === "None") {
		licenseSection = "";
	} else {
		licenseSection = "License: ";
	}
	return licenseSection;
}

//Create a function to generate markdown for README
function generateMarkdown(data) {
	return `
  # ${data.title}

  ## ${renderLicenseBadge(data.license)}

  ## **Description**
  ${data.description}

  <br/>

  ## **Table of Contents**
  <details>
  <summary>Click to expand</summary>

  ### [Installation](#Installation)
  ### [Usage](#Usage)
  ### [License](#License)
  ### [Contributing](#Contributing)
  ### [Tests](#Tests)
  ### [Questions](#Questions)
  </details>

  <br/>

  ## **Installation**
  ${data.installation}

  <br/>

  ## **Usage**
  ${data.usage}

  <br/>

  ## **Contribution**
  ${data.contribution}

  <br/>

  ## **Tests**
  ${data.test}

  <br/>

  ## **Questions**
  This repo was created by: [${data.name}].
  For questions, email: ${data.email}

  <br/>

  ## **License**
  ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
