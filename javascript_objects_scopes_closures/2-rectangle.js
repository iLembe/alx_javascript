#!/usr/bin/node

class Rectangle {
    constructor(w = 0, h = 0) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        // If w or h is not a positive integer, create an empty object
        Object.create(null);
      }
    }
  }
  
  const r3 = new Rectangle();
  console.log(r3);         // Output: {}
  console.log(r3.width);   // Output: undefined
  console.log(r3.height);  // Output: undefined
  