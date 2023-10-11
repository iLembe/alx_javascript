class Rectangle {
    constructor(w, h) {
      this.width = w;
      this.height = h;
    }
  }

  

  const r1 = new Rectangle(a, b);
  console.log(r1);         // Output: Rectangle { width: a, height: b}
  console.log(r1.width);   // Output: a
  console.log(r1.height);  // Output: b