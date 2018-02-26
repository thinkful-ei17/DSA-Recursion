
function reverseString(string) {
  let reverseString = '';

  for(let n = string.length - 1; n > 0; n--){
    reverseString += string[n];
  }

  return reverseString;
}

//
console.log(reverseString('a number isnt a string X.X lol'));
