// ### Task-4: 
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

//     Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.


// const word = 'xloPhoneX';

// let replaceword = '';

// for(let char of word){
  
//   const replace = char.replace('x','y');
//   const replace2 =char.replace('X','Y');  
//   replaceword.push(replace);
// }
// console.log(replaceword);


const word = 'xloPhoneX';

let replaceWord = '';
for(let char of word){
  if(char === 'x'){
    replaceWord += 'y'
  } else if(char === 'X'){
    replaceWord += "Y"
  } else {
    replaceWord += char
  }
}
console.log(replaceWord);






