class Square extends require('./5-square') {
    charPrint(c) {
      if (c === undefined) c = 'X';
  
      for (let i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
      }
    }
  }
  
  const square = new Square(3);
  square.charPrint('D');
  square.double();
  square.charPrint('O');
  
