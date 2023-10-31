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
  
    rotate() {
      if (this.width && this.height) {
        const temp = this.width;
        this.width = this.height;
        this.height = temp;
      }
    }
  
    double() {
      if (this.width && this.height) {
        this.width *= 2;
        this.height *= 2;
      }
    }
  }
  
  // Example usage:
  const rectangle = new Rectangle(4, 3);
  rectangle.rotate();
  rectangle.print();
  rectangle.double();
  rectangle.print();
  