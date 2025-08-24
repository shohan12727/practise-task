let welcomeMessage = document.getElementById("welcome_message");
welcomeMessage.style.color = "red";
welcomeMessage.innerText = 'Fuck Cse';
welcomeMessage.style.textAlign = 'center';
//passage 

let dummyPassage = document.getElementsByClassName("dummy_passage");
for (let i = 0; i < dummyPassage.length; i++) {
  dummyPassage[i].style.border = '2px solid green'
  dummyPassage[i].style.borderRadius = '10px'
  dummyPassage[i].style.backgroundColor = 'papayawhip';
  dummyPassage[i].style.padding = '10px'
}

let getAllList = document.getElementsByTagName('li');
console.log(getAllList);

const newLi = document.createElement('li');

newLi.innerText = 'Russsia';

let parentUl = document.querySelector('ul');
parentUl.appendChild(newLi);
