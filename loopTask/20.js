let count = 80;

const timer = setInterval( () => {
   console.log(count);
   if (count < 50){
    clearInterval(timer)
   }
   count --;
},200)

