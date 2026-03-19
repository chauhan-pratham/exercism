export function dayRate(ratePerHour) {
  return ratePerHour*8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget/dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let month = Math.floor(numDays/22);
  let monthlyRate = dayRate(ratePerHour)*22;
  let monthlyDiscount = monthlyRate*(1-discount);
  let otherDaysRate = (numDays % 22) * dayRate(ratePerHour);

  return Math.ceil(month * monthlyDiscount + otherDaysRate);
}
