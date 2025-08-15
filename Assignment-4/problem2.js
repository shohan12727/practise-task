// function  onlyCharacter( str ) {
//         if(typeof str !== 'string') {
//           return 'Invalid'
//         }
//         str = str.toUpperCase()
//        str = str.replace(/\s+/g, '');

//         return str;
// }




function onlyCharacter(str) {

  if (typeof str !== 'string') {
    return 'Invalid';
  }

  str = str.toUpperCase();
  const splited = str.split('')
  let word = [];
  for (const char of splited) {
    if (char !== ' ') {
      word.push(char);
    }
  }

  const joined = word.join('');
  return joined;

}


console.log(onlyCharacter(true));

