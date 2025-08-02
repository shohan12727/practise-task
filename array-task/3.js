const books = [
  "To Kill a Mockingbird",
  "1984",
  "The Great Gatsby",
  "The Hobbit",
  "The Pragmatic Programmer"
];



const hasJsBook = books.includes("The Pragmatic Programmer");

if (hasJsBook) {
  console.log("Book are in there");

} else {
  console.log('no book available');

}

const fruits = ["apple", "banana", "mango"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [true, "hello", 42];


const name = "Shohan";
const age = 20;
const isStudent = true;
const score = null;



console.log(Array.isArray(fruits));
console.log(Array.isArray(name));
console.log(Array.isArray(isStudent));
console.log(Array.isArray(numbers));
console.log(Array.isArray(score));
console.log(Array.isArray(mixed));
console.log(Array.isArray(age));



