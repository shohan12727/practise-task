// Display sum of all the even numbers from 206 to 311.


let i = 206;
let sum = 0;

while(i <= 311){
  if(i % 2 === 0){
    sum += i;
  }
  i++;
}