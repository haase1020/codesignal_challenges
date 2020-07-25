// Ticket numbers usually consist of an even number of digits.
// A ticket number is considered lucky if the sum of the first
// half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
  let stringRep = n.toString();
  let pivot = stringRep.length / 2;
  let firstHalf = stringRep.substring(0, pivot);
  let secHalf = stringRep.substring(pivot);

  let acc1 = firstHalf.split('').reduce((acc, next) => {
    acc += +next;
    return acc;
  }, 0);

  let acc2 = secHalf.split('').reduce((acc, next) => {
    acc += +next;
    return acc;
  }, 0);

  return acc1 == acc2;
}

//following is to test that solution works:
console.log(isLucky(239077));
// expected outcome: true
