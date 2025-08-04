/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var increasingRate = 5/100;

var presentSalary  = startingSalary * Math.pow((1+increasingRate), experience)

var forFixed = presentSalary.toFixed(2);

console.log(forFixed);
