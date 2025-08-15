function onlyCharacter (str) {

   if(typeof str !== 'string'){
    return 'Invalid'
   }
  str = str.toUpperCase();
 let trimed  = str.trim();
 let splited = trimed.split(' ');
 let joined = splited.join('');
 return joined;
}

console.log(onlyCharacter("Serv er : : Do wn"));