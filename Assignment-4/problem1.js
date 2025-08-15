function totalFine( fare ) {
     if (typeof fare !== 'number' || fare <= 0) {
    return 'Invalid';
  }
       
          const totalFine = fare + (fare * (20 / 100) + 30);
          return totalFine;
}

// console.log(totalFine("Gorib tai ticket katinai"));


