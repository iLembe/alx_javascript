class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      }
    }
  
    print() {
      if (this.width && this.height) {
        for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
        }
      }
    }
  }
  module.exports = Rectangle;
  
  /* Example usage:
  const rectangle1 = new Rectangle(4, 3);
  const rectangle2 = new Rectangle(0, 5);
  
  rectangle1.print();
  rectangle2.print();*/
  