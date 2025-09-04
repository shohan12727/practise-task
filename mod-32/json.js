const person = {
  name : 'Shohan',
  uni : 'NSU',
  ID: 25132,
  isMarried : false
}

const jsonConverted = JSON.stringify(person);
console.log(jsonConverted, typeof jsonConverted);

const parseConverted = JSON.parse(jsonConverted);
console.log(parseConverted, typeof parseConverted);
// javaScrit object notation 