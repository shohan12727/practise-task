function bestTeam(player1, player2) {
  if (typeof player1  !== 'object' || typeof player2 !== 'object') {
    return 'Invalid';
  }
 
   const player1Property  = player1.foul + player1.cardY + player1.cardR ;
   const player2Property  = player2.foul + player2.cardY + player2.cardR;
   if(player1Property > player2Property) {
    return player2.name;
   } else if (player1Property < player2Property) {
    return player1.name;
   } else {
    return 'Tie'
   }
  
}


console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"));
