const gerData = new Promise((resolve, reject) => {
   const num = Math.random() * 10;
   console.log(num);
   if(num > 5){
    resolve({num: num})
   } else {
    reject({err: 'Data is not available'})
   }
}) 

gerData.then(data => console.log(data))
.then(data => console.log(data))
.catch(data => console.log(data))

