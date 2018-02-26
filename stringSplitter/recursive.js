/*

*/

function stringSplitter(string, seperator) {


  if(string.indexOf(seperator) === -1){
    return [string];
  }
  
  return [string.substring(0, string.indexOf(seperator)), ...stringSplitter(string.substring(string.indexOf(seperator) + 1), seperator)]
}


console.log(stringSplitter('split this! cant believe it', ' '));
