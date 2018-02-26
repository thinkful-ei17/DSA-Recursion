/*
Write a recursive function that counts how many sheep jumps over the fence.
Your program should take a number as an input.
That number should be the number of sheep you have.
The function should display the number along with the message
"Another sheep jump over the fence" until no more sheep are left.
*/

function countSheep(num) {

  if(num === 0){
    console.log('0 - No more sheep left!');
    return '';
  }
  //3 - Another sheep jump over the fence
  console.log(num + ' - Another sheep jumped over the fence');

  countSheep(num - 1);
}

//
countSheep(5);
