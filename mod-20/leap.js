function isLeapYear (year){
  if(year % 4 === 0){
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2024));


function leapYear2(year){
  if(year % 100 !== 0 && year % 4 === 0){
    return true;
  } 
   if(year % 100 === 0 && year % 400 === 0){
    return true;
   }
  return false;
}
console.log(leapYear2(2000));
