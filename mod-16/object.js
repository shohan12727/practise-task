const person = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 30,
  isStudent: false,
  greet: function() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  },
  'fav place': ['cox','bandarban','kuakata']

};

// console.log(person.fav place);
console.log(person["fav place"]);


console.log(person.age);
console.log(person['isStudent']);
person['greet'](); 

// console.log(person['greet']()); 


