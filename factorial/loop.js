function factorial(num) {
  let product = 1;

  for (var i = 1; i < num + 1; i++) {
    console.log(i);
    product *= i;
  }

  return product;
}
console.log(factorial(7));
