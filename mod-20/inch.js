function inchToFeet (inch) {
  const feet = inch / 12 ;
  return feet ;
}

console.log(inchToFeet(70));


function inchToFeet2 (inch) {
    const feet = inch / 12 ;
    const feetNumber  = parseInt(feet);
    const remaining = inch % 12;
    const result = feetNumber + ' ft ' + remaining + ' inch';
    return result
}

console.log(inchToFeet2(75));


