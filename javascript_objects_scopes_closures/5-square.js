const Rectangle = require('./4-rectangle'); // 

class Square extends Rectangle {
  constructor(size) {
    super(size, size); // Calling the constructor of the Rectangle class with the size argument
  }
}
module.exports = Rectangle;
module.exports = Square;
