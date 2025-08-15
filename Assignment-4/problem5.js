function  resultReport( marks ) {
          if(Array.isArray(marks) !== true){
            return 'Invalid';
          }
          let sum = 0;
          let passCount = 0;
          let failCount = 0;
      
      for(let i = 0 ; i < marks.length ; i ++){
        sum += marks[i];
        
        if(marks[i] >= 40){
          passCount ++;
        } else {
          failCount ++;
        }
      }  
      
      const avg = Math.round(sum / marks.length);
      return {
        finalScore: avg,
        pass: passCount,
        fail: failCount
      }
}


console.log(resultReport(100));
