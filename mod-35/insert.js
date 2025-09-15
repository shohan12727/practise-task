const products = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Smartphone", price: 800, inStock: false },
  { id: 3, name: "Headphones", price: 150, inStock: true },
  { id: 4, name: "Keyboard", price: 60, inStock: true },
  { id: 5, name: "Mouse", price: 40, inStock: false }
];

 const newData = {
  name: 'shohan',
  age: 20,
  university: "NSU"
 }
 const newArray = [...products, newData];

 const filtered = products.filter(product => product.inStock === true);
const newArray2 = [...filtered, newData]


console.log(newArray2);
