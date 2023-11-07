#!/usr/bin/node

class Rectangle {
   /* constructor() {
      // Might have to Add constructor logic here
    }*/
  }
  module.exports = Rectangle;
  const Rectangle = require ('./0-rectangle');
  // Example of creating an instance of the Rectangle class:
  const r1 = new Rectangle();
  
  console.log(r1);  // Output: Rectangle {}
  console.log(r1.constructor);  // Output: [Function: Rectangle]
