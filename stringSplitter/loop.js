
function stringSplitter(string, seperator) {

  let splitArr = [];


  while(string.indexOf(seperator) !== -1) {

    splitArr.push(string.substring(0, string.indexOf(seperator)));
    string = string.substring(string.indexOf(seperator) + 1);

  }

  return [...splitArr, string];
}


console.log(stringSplitter('split this! cant believe it', ' '));
