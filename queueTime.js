// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
//
// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

let queueTime = (customer, n) => {
  let lines = {};
  while (n > 0) {
    lines[n] = 0;
    n = n - 1;
  }
  for (let i = 0; i < customer.length; i++) {
    lines[
      Object.keys(lines)[
        Object.values(lines).indexOf(Math.min(...Object.values(lines)))
      ]
    ] += customer[i];
  }
  console.log(Math.max(...Object.values(lines)));
};

queueTime([1, 2, 3, 4], 3);
