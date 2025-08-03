// Count how many times a string has the letter `a`
const randomWord = 'kjkfdakjaanakjkjanjavb';

let count = 0;

for(let i of randomWord){
  if(i=='a'){
    count ++;
  }
}

console.log(`Total number of a ${count}`);
