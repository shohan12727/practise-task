function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }

  const player1Score = player1.foul + player1.cardY + player1.cardR;
  const player2Score = player2.foul + player2.cardY + player2.cardR;

  if (player1Score < player2Score) {
    return player1.name;
  }
  if (player2Score < player1Score) {
    return player2.name;
  }
  return "Tie";
}


console.log(bestTeam("France", "b"));
console.log(
  bestTeam(["France", "cd", "dl", null], {
    name: "Germany",
    foul: 10,
    cardY: 1,
    cardR: 1,
  })
);