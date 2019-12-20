let queueTime = (customer, n) => {
  let lines = {}
  while (n > 0) {
    lines[n] = 0
    n = n -1
  }
  for (let i = 0; i < customer.length; i ++) {
  lines[Object.keys(lines)[Object.values(lines).indexOf(Math.min(...Object.values(lines)))]] += customer[i]
  }
  console.log(Math.max(...Object.values(lines)));
  // if (Math.max(...customer) > time/n) {
  //   console.log(Math.max(...customer))
  // } else {
  //   console.log(time/n)
  //
  // }
}

queueTime([1,2,3,4], 3)
