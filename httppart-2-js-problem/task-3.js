// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.




// function calculateElectronicsBudget (laptop, tablet, mobile) {
//   const totalBudget = laptop + tablet + mobile;
//   return totalBudget ;
// }

// console.log(calculateElectronicsBudget(100,100,100))


function calculateElectronicsBudget (laptopQty, tabletQty, mobileQty){
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const totalBudget = (laptopPrice * laptopQty) + (tabletPrice * tabletQty) + (mobilePrice * mobileQty) ;

  return totalBudget;

}
console.log(calculateElectronicsBudget(1,2,3));
