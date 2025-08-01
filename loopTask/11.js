// Display sum of all the odd numbers from 81 to 131.


let i = 81;
let sum =0;
while(i <= 131){
   if(i % 2 === 1){
     sum += i;
   }
  i++;
}
console.log(sum);
