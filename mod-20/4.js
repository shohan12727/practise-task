function count_zero (str){
  let count = 0;
  for(const i of str){
    if(i==='0'){
      count ++;
    } 
  }
  return count;
}
const binary = '010001';
console.log(count_zero(binary));
