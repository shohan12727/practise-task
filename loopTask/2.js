let i = 1;
let sum = 0;

while (i <= 150) {
  sum += i;
  if (sum >= 100) {
    break
  }
  i++;
}

// console.log("Final sum", sum);
// console.log("Final number added", i);








// let j = 1;

// while(j <= 100){
//   console.log(j);
//   if(j*j){
//     break
//   }
//   j ++;
// }

// console.log(j);



for( let i = 0; i <= 100;i++){
  let sqrt = Math.sqrt(i); //checks square or not
  if(Number.isInteger(sqrt) && i > 1){
    console.log(`first square number encounter ${i}`);
    break;
  }
}












