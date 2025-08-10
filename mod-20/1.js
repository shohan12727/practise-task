function findingOddEven (number){
  if(number % 2 !== 0){
    const multiply = number * 2;
    return multiply;
  } else {
    const divided = number / 2;
    return divided;
  }
}

console.log(findingOddEven(49));
