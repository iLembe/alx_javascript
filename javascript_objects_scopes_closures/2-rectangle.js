class Rectangle {
    constructor(w, h) {
      this.width = w;
      this.height = h;
    }
  }

  const r1 = new Rectangle(2, 3);
  console.log(r1);         // Output: Rectangle { width: 2, height: 3 }
  console.log(r1.width);   // Output: 2
  console.log(r1.height);  // Output: 3
  
  