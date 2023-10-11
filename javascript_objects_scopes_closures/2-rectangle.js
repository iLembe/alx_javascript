#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        // If w or h is not a positive integer, create an empty object
        Object.create(null);
      }
    }
  }
  
  // Test cases:
  
  const r2 = new Rectangle(0, 3);
  console.log(r2);         // Output: {}
  console.log(r2.width);   // Output: undefined
  console.log(r2.height);  // Output: undefined
  