/*
Write a function that takes an array as input which contains...
an unknown set of numbers, and outputs an array with each input value doubled.
Test your solution by trying a handful of different arrays. For example,

*/


function doubleArray(arr) {
  console.log(arr);

  if (arr.length === 0){
    return arr;
  }

  return [arr.shift()*2, ...doubleArray(arr)]
}

console.log(doubleArray([12,13,26,67]));
