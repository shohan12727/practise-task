const sentence = "I love Bangladesh";

let reverse = "";

for(let i = 0; i < sentence.length; i++){
 const letter = sentence[i];

 reverse = letter + reverse;
  
}

console.log(reverse);
