const student = {
  name: "pal",
  marks: 90,
  1: 50,
  'home_address': 'Boalmari'
}
for(const key in student){
  const value = student[key];
  console.log(key,":", value);
}




const studentName = student.name;
// console.log(studentName);
// console.log(student[1]);
// console.log(student['home_address']);
