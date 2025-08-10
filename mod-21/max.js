function getMax (numbers){
   let max = numbers [0];
   for(const num of numbers){
    if (num > max ){
      max = num;
    }
   }
   return max;
}

const heights = [25,30,96,5,50];
console.log(getMax(heights));
