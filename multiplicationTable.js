// Create a function that accepts dimensions, of Rows x Columns,
//
// Example:
//
// multiplication_table(3,3)
//
// 1 2 3
// 2 4 6
// 3 6 9
//
// -->[[1,2,3],[2,4,6],[3,6,9]]
//
// Each value on the table should be equal to the value of multiplying
//the number in its first row times the number in its first column.

let multiply = (row, column) => {
  let table = [];
  for (let i = 1; i <= row; i++) {
    let arr = [];
    for (let j = 1; j <= column; j++) {
      arr.push(j * i);
    }
    table.push(arr);
  }
  console.log(table);
};

multiply(2, 10);
