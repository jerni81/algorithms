// Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.
//
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'
//
// Note that the principal is not taxed but only the year's accrued interest

let calculateYears = (principal, interest, tax, desired) => {
  let years = 0;
  let current = principal;
  while (current < desired) {
    let yrInt = current * interest;
    current = current + (yrInt - yrInt * tax);
    years += 1;
  }
  console.log(years);
};

calculateYears(1000, 0.016525, 0.18, 1200);
