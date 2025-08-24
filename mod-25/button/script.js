
let click_btn = document.getElementById("click_btn");
// console.log(click_btn);

click_btn.style.display = 'block';
click_btn.style.marginLeft = 'auto';
click_btn.style.marginRight = 'auto';

function makeYellow() {
  document.body.style.backgroundColor = 'yellow';
}

function changeText() {
  document.getElementById('name').innerText = 'King Shohan';
}

function randomBackground() {
  const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}


function toggleVisibility() {
  const element = document.getElementById('toggleBtn');
  element.style.display = (element.style.display === 'none') ? 'block' : 'none';
}

function addText () {
  const p = document.createElement('p');
  p.innerText = 'Hi, I am shohan';
  document.body.appendChild(p);   
}

