function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  if ( n === 1 ) {
    return 1;
  }

  if (n === 2) {
    return 1;
  }

  let arr = [1,1];

  for (let i = 2; i < n; i++) {
    console.log('started?');
    let newNum = arr[i-1] + arr[i-2];
    arr.push(newNum);

  }

  return arr[arr.length - 1];
}


console.log(fibonacci(6));
