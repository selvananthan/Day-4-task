function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  let strings = ["madam", "wow", "racecar", "world", "level", "mom"];

  let getPalindromes = function(arr) {
    return arr.filter(isPalindrome);
  };
  
  let palindromes = getPalindromes(strings);
  console.log(palindromes);
    