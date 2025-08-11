// function longestString (sentence){
//   const splited = sentence.split(' ')
//   let max = splited[0].length;
//   for(const item of splited){
//     if(item.length > max){
//       max = item.length;
//     }
//   }
//   return item;
// }

const statement = "I am learning Programming to become a programmer";
console.log(longestString(statement));


function longestString (sentence){
  const words = sentence.split(' ');
  let longestWord = words[0] // initialize
  for(const word of words){
    if(word.length > longestWord.length){
      longestWord = word;
    }
  }
  return longestWord;
}