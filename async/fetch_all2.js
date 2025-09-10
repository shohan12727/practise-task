const api1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json());
const api2 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
const api3 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

Promise.all([api1, api2, api3]).then(results => {
  console.log(results);
}).catch(err => {
  console.log('failed', err);
})
// Here, Promise.all function there is an arrow and after that i called .then() function and after that for catching error .catch()  