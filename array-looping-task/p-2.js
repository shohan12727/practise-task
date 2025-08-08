const numbers = [12, 98, 5, 41, 23, 78, 46];

let even_numbers = [];

for(let i = 0; i < numbers.length; i++){
  // console.log(numbers[i]);
  if(numbers[i] % 2 === 0){
    even_numbers.push(numbers[i]);
    
  }
  
}

console.log(even_numbers);
