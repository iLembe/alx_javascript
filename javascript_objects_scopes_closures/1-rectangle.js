class Rectangle {
    constructor(w, h) {
      this.width = w;
      this.height = h;
    }
  }

  const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the width: ', (width) => {
  rl.question('Enter the height: ', (height) => {
    const r1 = new Rectangle(width, height);
    console.log(r1);
    console.log(r1.width);
    console.log(r1.height);
    rl.close();
  });
});
