function make_avg (nums, size){
  let sum =0;
  for( const num of nums){
 sum += num;
  }
   const avg = sum / size;
   return avg;
}
const emni = [55,4,1];
console.log(make_avg(emni, 3));
