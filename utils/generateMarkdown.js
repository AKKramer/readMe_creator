// function to generate markdown for README



//  LOOK AT ME 
// https://stackoverflow.com/questions/11948245/markdown-to-create-pages-and-table-of-contents

function generateMarkdown(data) {
  return `

# ${data.title}
 
## Table of Contents
2. [Description](#description)
3. [Installation](#Installation_instructions)
4. [Usage](#Usage_Instructions)
5. [Contribution](#Contribution_notes)
6. [License](#License_information)
7. [Contact_information](#Contact_information)
  
  ## Description 
  ${data.description}

  ## Installation_instructions
  ${data.installation}

  ## Usage_Instructions
  ${data.usage}

  ## Contribution_notes
  ${data.contribution}

  ## License_information
  ${data.license}

  ## Contact_information
  <ul>
    <li>My GitHub username is: ${data.github}</li>
    <li>My email address is: ${data.email}</li>
  </ul>


`
}



module.exports = {
  generateMarkdown
};
