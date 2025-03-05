const getUserInput = require('./lib/userInput');
const generateSVG = require('./lib/svgGenerator');

(async function() {
  try {
    const { text, textColor, shape, shapeColor } = await getUserInput();
    generateSVG(text, textColor, shape, shapeColor);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error generating logo:', error);
  }
})();