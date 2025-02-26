const { Triangle, Circle, Square } = require('../lib/shapes');

describe('Triangle', () => {
  test('should set color and render correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
// The rendered output is an SVG <polygon> element because SVG doesn't have a <triangle> element. 
// I used <polygon> with specified points to create a triangle shape.
    expect(triangle.render()).toBe('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('should set color and render correctly', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

describe('Square', () => {
  test('should set color and render correctly', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="green" />');
  });
});