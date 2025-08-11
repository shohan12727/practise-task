function findNumbers (array, find){
  let count = 0;
  for(const item of array){
    if(item == find){
      count ++;
    }
  }
  return count;
}

const numbers =  [5,6,11,12,98,5];
console.log(findNumbers(numbers,25));
