console.log("One");
console.log("two");
three();
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log("four");

function three() {
  console.log("three");
}

setTimeout(three, 5000)

setInterval(three, 1000)
