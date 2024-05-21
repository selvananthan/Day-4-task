let uniqueNumbers = (function(arr) {
    return [...new Set(arr)];
  })([1, 2, 3, 4, 3, 2, 1, 5, 6, 5]);
  
  console.log(uniqueNumbers);
  