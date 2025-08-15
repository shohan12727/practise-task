function totalFine(fare) {
  if (typeof fare !== 'number' || fare <= 0) {
    return 'Invalid';
  }

  const totalFine = fare + (fare * (20 / 100) + 30);
  return totalFine;
}








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











function bestTeam(player1, player2) {
  if (typeof player1 !== 'object' || typeof player2 !== 'object') {
    return 'Invalid';
  }

  const player1Property = player1.foul + player1.cardY + player1.cardR;
  const player2Property = player2.foul + player2.cardY + player2.cardR;
  if (player1Property > player2Property) {
    return player2.name;
  } else if (player1Property < player2Property) {
    return player1.name;
  } else {
    return 'Tie'
  }

}













function  isSame(arr1 , arr2 ) {
         if(Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
          return 'Invalid';
         }


         if(arr1.length !== arr2.length){
          return false;
         }

         for(let i = 0; i < arr1.length; i++){
        if(      arr1[i] !== arr2[i]){
          return false;
        }

         } 
         return true;
}
















function resultReport(marks) {
  if (Array.isArray(marks) !== true) {
    return 'Invalid';
  }
  let sum = 0;
  let passCount = 0;
  let failCount = 0;

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];

    if (marks[i] >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }


  let avg = Math.round(sum / marks.length);

  if (isNaN(avg)) {
    avg = 0;
  }
  return {
    finalScore: avg,
    pass: passCount,
    fail: failCount
  }

}
