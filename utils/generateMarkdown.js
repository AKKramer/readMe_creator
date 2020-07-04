// function to generate markdown for README

function generateMarkdown(data) {
  var license = ''
  if(data.license === 'MIT License'){
    license = 'https://img.shields.io/badge/License-MIT-yellow.svg'
  }
  else if(data.license === 'Apache License 2.0'){
    license = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  }
  else if(data.license === 'Mozilla Public License (MPL) 1.1'){
    license = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
  }
  else{
    license = 'https://img.shields.io/badge/License-ODC_BY-brightgreen.svg'
  }



  return `

# Project title: ${data.title}

![A test image](${license})

 
## Table of Contents
1. [Description](#description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributing](#Contributing)
5. [License](#License)
5. [Tests](#Tests)
6. [Questions](#Questions)
  
  ## Description 
  <ul>
    <li>${data.description}</li>
  </ul>

  ## Installation
  <ul>
    <li>${data.installation}</li>
  </ul>

  ## Usage
  <ul>
    <li>${data.usage}</li>
  </ul>

  ## Contributing
  <ul>
    <li>${data.contribution}</li>
  </ul>

  ## License
  <ul>
    <li>${data.license}</li>
  </ul>

  ## Tests
  <ul>
    <li>${data.test}</li>
  </ul>

  ## Questions
  <ul>
    <li>My GitHub username is: ${data.github}</li>
    <li>My email address is: ${data.email}</li>
  </ul>


`
}



module.exports = {
  generateMarkdown
};
