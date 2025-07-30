const age = 61;
const isStudent = false;

let ticketPrice = 800;

if(age < 10){
   ticketPrice = 0;
} else if (isStudent === true) {
  ticketPrice = 800 * 0.5;
} else if (age >= 60){
  ticketPrice = 800 * .85;
} else {
  console.log(ticketPrice);
}

console.log(ticketPrice);
