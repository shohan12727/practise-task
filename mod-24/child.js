let mainContainer = document.getElementById("main_container");

// create a child 
let section = document.createElement('section');
section.innerHTML = `
<h1>Subtitle Here</h1>
<p>This is a paragraph inside the section.</p>
` 
// console.log(section);

mainContainer.appendChild(section);
let ul = document.createElement('ul');
let li = document.createElement('li');
li.innerText = 'Bangladesh';
ul.appendChild(li);
section.appendChild(ul);