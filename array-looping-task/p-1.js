const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let reverse = [];

for(let i = 0; i < numbers.length; i++){
  reverse.unshift(numbers[i]);
}

console.log(reverse);


const nums = [7,8,9,4,5,6];

let rev = [];

for(let j = nums.length -1; j >= 0; j--){
  rev.push(nums[j])
}
console.log(rev);


const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let rev2 = [];
for(let k = colors.length -1;k >= 0; k--){
  rev2.push(colors[k]);
}
console.log(rev2);
