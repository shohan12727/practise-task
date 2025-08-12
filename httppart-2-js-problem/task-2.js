// Find the friend with the smallest name.


const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName (arrStrs) {

  let small = arrStrs[0]; 
  for(const arrStr of arrStrs){
         if(arrStr.length < small.length){
          small = arrStr;
         }
  }
  return small;
}
console.log(smallestName(heights2))