//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return "";
    }

    if (license == "MIT") {
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } else if (license == "Mozilla") {
        return "![License: MPL](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
    } else if (license == "Eclipse") {
        return "![License: Eclipse](https://img.shields.io/badge/License-EPL_1.0-red.svg)"
    } else if (license == "Apache") {
        return "![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
    }
}

//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

//Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;