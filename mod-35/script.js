const  addToLocalStorage = () => {
  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;
  // console.log(name, id);
  // localStorage.setItem(name, id) 
  const data = {id, name}
  const jsonData = JSON.stringify(data);
  console.log(jsonData);
  
  localStorage.setItem(id,jsonData)
  
  
  
}