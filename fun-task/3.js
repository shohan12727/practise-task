function findVowels (string){
    let count = 0;
    for(const item of string){
      if(item==='a'|| item === 'e' || item === 'i' || item === 'o' || item === 'u'){
        count ++;
      }
    }
    return count;
}

const name = 'ashrafulislamshohan';

console.log(findVowels(name))


function findVowels2 (sting) {
  let count = 0;
  const vowels = 'aeiouAEIOU';
  for(const item of sting){
    if(vowels.includes(item)){
      count ++;
    }
  }
  return count;
}
const name2 = 'Ashraful Islam';
console.log(findVowels2(name2));
