class Square extends require('./5-square') {
    charPrint(c) {
      if (c === undefined) c = 'X';
  
      for (let i = 0; i < this.height; i++) {
        if (c === 'D' && i < this.height / 2) {
          console.log(c.repeat(this.width));
        } else if (c === 'O' && i < this.height / 2) {
          console.log('D'.repeat(this.width));
        } else {
          console.log(c.repeat(this.width));
        }
      }
    }
  }
module.exports = Rectangle;
module.exports = Square;

  /*
  const square = new Square(3);
  square.charPrint('D');
  square.double();
  square.charPrint('O');*/
  