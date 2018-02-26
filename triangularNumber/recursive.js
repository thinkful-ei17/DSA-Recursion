/*

*/

function triangularNumber(n) {

  if(n === 0){
    return 0;
  }
  console.log(n + ` +  triangularNumber(${n} - 1)..`);
  return n + triangularNumber(n-1);
}

//
console.log(triangularNumber(5));
/*
 4 + ....
 3 + ......
 2 + ........
 1 + .........
 0 ..............
 go up!



*/
