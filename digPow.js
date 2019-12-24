// Some numbers have funny properties. For example:
//
// 89 --> 8¹ + 9² = 89 * 1
//
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
//
// Given a positive integer n written as abcd... (a, b, c, d... being digits)
// and a positive integer p
//
// we want to find a positive integer k, if it exists, such as the sum of
// the digits of n taken to the successive powers of p is equal to k * n.

let digPow = (n, p) => {
  let splt = n.toString().split("");
  let pow = p;
  let sum = 0;
  for (let i = 0; i < splt.length; i++) {
    let ans = Math.pow(splt[i], pow);
    sum += ans;
    pow += 1;
  }
  console.log(sum % n ? -1 : sum / n);
};

digPow(46288, 3);
