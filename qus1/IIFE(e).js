function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  let palindromes = (function(arr) {
    return arr.filter(isPalindrome);
  })(["madam", "wow", "racecar", "world", "level", "mom"]);
  
  console.log(palindromes);
    