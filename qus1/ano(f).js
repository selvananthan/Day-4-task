let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let findMedian = function(arr1, arr2) {
  let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  let mid = mergedArray.length / 2;
  return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
};

let median = findMedian(arr1, arr2);
console.log(median);
