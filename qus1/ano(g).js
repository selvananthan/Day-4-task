let numbers = [1, 2, 3, 4, 3, 2, 1, 5, 6, 5];

let removeDuplicates = function(arr) {
  return [...new Set(arr)];
};

let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);

