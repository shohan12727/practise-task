const numbers = [1, 2, 3, 4, 5, 6];
numbers.push(8)
numbers.pop()
numbers.unshift(0)
numbers.shift()

const sliced = numbers.slice(0, 3)

console.log(sliced);

const sum = (...rest) => {
  console.log(rest);
  
}
sum(2,3,4,5,6,78,9,12);





const nums = [1,2,3,4,5,6,7,8,9];

const newNums = [78,100]


console.log(...nums, ...newNums);


const products = [
  { id: 1, name: "Wireless Mouse", price: 15.99, category: "Electronics", inStock: true, rating: 4.3 },
  { id: 2, name: "Laptop Backpack", price: 39.99, category: "Accessories", inStock: true, rating: 4.6 },
  { id: 3, name: "Bluetooth Speaker", price: 29.5, category: "Electronics", inStock: false, rating: 4.1 },
  { id: 4, name: "Running Shoes", price: 59.0, category: "Sportswear", inStock: true, rating: 4.8 },
  { id: 5, name: "Coffee Mug", price: 7.25, category: "Kitchen", inStock: true, rating: 4.0 }
];

const result = products.map(product => product.price);
const result2 = products.filter(product => product.price > 30)
const result3 = products.find(product => product.category === "Electronics")
console.log(result3);

