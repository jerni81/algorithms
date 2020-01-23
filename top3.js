// You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:
//
// products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
// amounts: [3, 24, 8]
// prices: [199, 299, 399]
// return the three product names with the highest revenue (amount * price).
//
// Note: if multiple products have the same revenue, order them according to their original positions in the input list.

function top3(products, amounts, prices) {
  let arrOut = [];
  let totals = []
  for (let i = 0; i < products.length; i++) {
    totals.push(amounts[i] * prices[i])
  } for (let j = 0; j < 3; j++) {
    let ind = totals.indexOf(Math.max(...totals))
    arrOut.push(products.splice( ind , 1).toString())
    totals.splice(ind, 1)
  }
  console.log(arrOut);
}


top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399])
