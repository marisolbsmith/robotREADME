// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") {
    return "";
  } else {
    return license;
  }
}

function renderLicenseLink(license) {
  if (renderLicenseBadge(license) === "") {
    return "";
  } else {
    return `https://img.shields.io/badge/license-${license}-blue?style=flat-square`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (renderLicenseBadge(license) === "") {
    return "";
  } else {
    return `https://img.shields.io/badge/license-${license}-blue?style=flat-square`;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (renderLicenseLink(license) === "") {
    return "";
  } else {
    return `## License
${renderLicenseLink(license)}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#contributing)
- [Tests](#tests)
- [Contact](#contact)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Contact 
${data.email}



${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
