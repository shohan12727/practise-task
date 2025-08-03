// Capitalize Every first Letter of each word in a String

const myName = 'ashraful islam shohan';

// console.log(myName.toLocaleUpperCase());

const capitalized = myName.split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

// const capitalized = myName
//   .split(' ')
//   .map(word => word[0].toUpperCase() + word.slice(1))
//   .join(' ');



console.log(capitalized);

