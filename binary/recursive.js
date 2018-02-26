function binary(n) {

  if (n == 0) {
    return '';
  }

  return '' + n%2 + binary(Math.floor(n/2));


}

console.log(binary(14));

//25
//11001
/*

[32, 16, 8, 4, 2, 1]
0        1  1  1  0
14

[1] 14%2 = 0
- 0
[2] 7%2 = 0 or 1
[3] 3%2 = 0 or 1
[4] n%2 = 0 or 1



*/
