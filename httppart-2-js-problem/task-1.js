// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const heights2 = [167, 190, 120, 165, 137];
   


function findLowest (numbers){


  let low = numbers[0];
   for(const number of numbers){
     if(number < low){
         low = number;
     }
   }
   return low;
}
console.log(findLowest(heights2));
