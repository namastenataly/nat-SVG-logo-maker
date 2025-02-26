const fs = require('fs');
const path = require('path');

function generateSVG(text, textColor, shape, shapeColor) {
  // Shape rendering
  let shapeSVG = '';
  switch (shape) {
    case 'circle':
      shapeSVG = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
      break;
    case 'triangle':
      shapeSVG = `<polygon points="150,18 244,182 56,182" fill="${shapeColor}" />`;
      break;
    case 'square':
      shapeSVG = `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />`;
      break;
    default:
      throw new Error('Invalid shape');
  }

  // SVG content
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  //path to save the file
  const filePath = path.join(__dirname, '../examples/logo.svg');

  // Write the SVG content to the file
  fs.writeFileSync(filePath, svgContent, 'utf8');
  console.log('Generated logo.svg');
}

module.exports = generateSVG;