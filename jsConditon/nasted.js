const myScore = 83;

const friendScore = 30;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log("go for a lunch");
  } else if (friendScore < 80 && friendScore >= 60) {
    console.log(" good luck next time");
  } else if (friendScore < 60 && friendScore >= 40) {
    console.log("keep your friend's message unseen.");
  } else if (friendScore < 40) {
    console.log("Block your friend ");
  }
} else {
  console.log("go to home and sleep and act sad");
}