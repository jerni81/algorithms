//Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

let descendingOrder = (num) => {
  let str = num.toString()
  let arr = str.split('')
  for (let i = 0; i <arr.length; i++){
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let holder = arr[i];
        arr[i] = arr[j];
        arr[j] = holder
      }
    }

  // let outPut = str2.parseInt()
  }
  let str2 = arr.join('')
  let outPut = parseInt(str2)
  return outPut
}

descendingOrder(283950);
