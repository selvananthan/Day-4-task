let strings = ["hello world", "javascript is fun", "openai is amazing"];

let toTitleCase = function(arr) {
  return arr.map(str => {
    return str.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  });
};

let titleCasedStrings = toTitleCase(strings);
console.log(titleCasedStrings);
