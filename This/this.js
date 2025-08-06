// "use strict";

// inside function 

function sayName() {
  console.log("this inside a function", this);
}

sayName();

function outer(a){
  console.log("This inside an outer function", this);
  

  return function inner(b){
    console.log("this inside an inner function", this);
    
  }
}

const outerResult = outer(5);

outerResult(3);

const getFood = () => this;
console.log(getFood());


const food = {
  name: "mango",
  color: "yellow",
  getDiscription: () => `${this.name} is ${this.color}`
}

console.log(food.getDiscription());

