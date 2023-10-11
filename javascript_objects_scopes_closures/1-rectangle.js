class Rectangle {
    constructor(w, h) {
      this.width = w;
      this.height = h;
    }
  }
  
  let a = 5;
  let b = 7;
  
  const r1 = new Rectangle(a, b);
  console.log(r1);         // Output: Rectangle { width: 5, height: 7 }
  console.log(r1.width);   // Output: 5
  console.log(r1.height);  // Output: 7
  