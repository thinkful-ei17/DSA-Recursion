/*

*/

function reverseString(string) {

  if(string.length === 0){
    return '';
  }

  return string[string.length - 1] + reverseString(string.slice(0, string.length-1))
}

//
console.log(reverseString('a number isnt a string X.X lol'));
