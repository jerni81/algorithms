let multiply = (row, column) => {
  let table = []
  for (let i = 1; i <= row; i++) {
    let arr = []
    for (let j = 1; j <= column; j++) {
      arr.push(j * i)
    }
    table.push(arr)
  }
  console.log(table);
}

multiply(2,10)
