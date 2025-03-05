const inquirer = import('inquirer');

async function getUserInput() {
  const inq = await inquirer;
  return inq.default.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: input => input.length <= 3 ? true : 'Text must be 3 characters or less.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hex):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hex):'
    }
  ]);
}

module.exports = getUserInput;
