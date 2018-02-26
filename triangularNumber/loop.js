function triangularNumber(n) {
  let total = 0;

  for (let num = n; num > 0; num--){
    total = total + num;
  }

  return total;
}

console.log(triangularNumber(4));
