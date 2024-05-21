let titleCasedStrings = (function(arr) {
    return arr.map(str => {
      return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join(' ');
    });
  })(["hello world", "javascript is fun", "openai is amazing"]);
  
  console.log(titleCasedStrings);
  