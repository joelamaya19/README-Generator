// Function to return a license badge based on the license type
function renderLicenseBadge(license) {
  if (license === "None")
    return `![License](https://img.shields.io/badge/License-None-brightgreen)`;
  if (license) {
      return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-brightgreen)`;
  }
  return '';
}

// Function to return the license link
function renderLicenseLink(license) {
  if (license) {
      return `[License](#license)`;
  }
  return '';
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (license === "None")
    return `\n This project is not licensed.`;
  if (license) {
    return `\n This project is licensed under the ${license} license.`;
  }
  return '';
}
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## License
  ${renderLicenseSection(data.license)}
  \n${renderLicenseBadge(data.license)}
  
  ## Questions
  For questions about the project, please contact [${data.github}](https://github.com/${data.github}) or email [${data.email}](mailto:${data.email}).
  `;
}

// Exports functions
module.exports = { 
  generateMarkdown, 
  renderLicenseBadge, 
  renderLicenseLink, 
  renderLicenseSection 
};