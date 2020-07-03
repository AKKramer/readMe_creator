// function to generate markdown for README



//  LOOK AT ME 
// https://stackoverflow.com/questions/11948245/markdown-to-create-pages-and-table-of-contents

function generateMarkdown(data) {
  var license = ''
  if(data.license === 'MIT License'){
    license = 'https://raw.githubusercontent.com/legacy-icons/license-icons/master/dist/32x32/mit.png'
  }
  else if(data.license === 'Apache License 2.0'){
    license = 'https://raw.githubusercontent.com/legacy-icons/license-icons/master/dist/32x32/apache.png'
  }
  else if(data.license === 'Mozilla Public License (MPL) 1.1'){
    license = 'https://raw.githubusercontent.com/legacy-icons/license-icons/master/dist/32x32/mozilla.png'
  }
  else{
    license = 'https://raw.githubusercontent.com/legacy-icons/license-icons/master/dist/32x32/open-source.png'
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
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## License
  ${data.license}

  ## Tests
  ${data.test}

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
