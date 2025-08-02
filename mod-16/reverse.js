const statatement = "I am who I am";

let reverse = "";

for (let i = 0; i < statatement.length; i++) {
  const letter = statatement[i];

  // console.log(letter);

  reverse = letter + reverse;

}

console.log(reverse);
