/*
Write a function that takes an array as input which contains...
an unknown set of numbers, and outputs an array with each input value doubled.
Test your solution by trying a handful of different arrays. For example,

*/


function doubleArray(arr) {

  for(number in arr){
    arr[number] = arr[number]*2;
  }

  return arr;
}


console.log(doubleArray([12,13,26,67]));
