let count = 81;

const timer = setInterval(() => {
  console.log(count);
  if(count == 65){
    clearInterval(timer)
  }
  count --
},1000);