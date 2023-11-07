#!/usr/bin/node

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      // Might have to Add constructor logic here
    }
  }
  
  // Example of creating an instance of the Rectangle class:
  const r1 = new Rectangle();
  
  console.log(r1);  // Output: Rectangle {}
  console.log(r1.constructor);  // Output: [Function: Rectangle]
