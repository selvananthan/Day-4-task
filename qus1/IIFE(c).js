let sum = (function(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  console.log(sum); 
  