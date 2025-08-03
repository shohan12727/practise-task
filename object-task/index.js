// task - 1 : 

const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": '#daa520'
};

const output = colors['golden rod'];

// console.log(output);


// task -2 

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};

car['passenger capacity'] = 29;
// console.log(car);

// task -3 

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

const result = student.physics.marks;
// console.log(result);

const result2 = student['physics']['marks'];
// console.log(result2);











// task - 4 

let varsityStudent = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

for(const value in varsityStudent){
  // console.log(value); 
  allValue = value;
}
// console.log(allValue.length);




let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(let key in myObject){
  console.log(`key: ${key} | type: ${myObject[key]} `)
}




























// for(const element in myObject){
  // console.log(`${element}`);
//   const type = typeof(element)
//   console.log(type);
// }






