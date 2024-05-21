let median = (function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = mergedArray.length / 2;
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  })([1, 3, 5], [2, 4, 6]);
  
  console.log(median);
  