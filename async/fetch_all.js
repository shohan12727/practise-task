const api1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json());
const api2 = fetch("https://jsonplaceholder.typicode.com/posts/2").then(res => res.json());
const api3 = fetch("https://jsonplaceholder.typicode.com/post/3").then(res => res.json());

Promise.all([api1, api2, api3])
  .then(results => {
    console.log(results); // array of 3 post objects
  })
  .catch(error => {
    console.log("Failed:", error);
  });
