const word = 'ajkhsdfAhjhajajhaAjhhajjkA'

let count = 0;

for(let i of word){
  if(i === 'a' || i === 'A'){
    count ++;
  }
}
console.log(count);
