const loadData =  () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())   // to parse the data 
    .then(json => console.log(json));
}