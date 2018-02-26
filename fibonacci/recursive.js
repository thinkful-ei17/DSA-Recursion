/*

*/

function fibonacci(n) {

  //base case
  if ( n === 1 ) {
    return 1;
  }

  if (n === 2) {
    return 1;
  }

  if (n === 0) {
    return 0;
  }

  //calculation
  return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(3));
// CANT STORE 2 places in list

// then do it w/ subproblems

//fib of 4 is... fib of 3 plus fib of 2

//fib of 3 is... fib of 2 plus fib of 1

//fib 2 = 1

//fib 1 = 1
