function maskify(cardNumber) {
  if (cardNumber.length === 0) return cardNumber;
  let result = cardNumber[0];

  let i = 1;
  while (i < cardNumber.length - 4) {
    if (isNaN(parseInt(cardNumber[i]))) {
      // we got -
      result += cardNumber[i];
    } else {
      result += "X";
    }
    i++;
  }

  while (i < cardNumber.length) {
    result += cardNumber[i];
    i++;
  }
  return result;
}

console.log(maskify("5512103073210694"));
// 5###########0694
console.log(maskify("4556-3646-0793-5616"));
// 4###-####-####-5616
console.log(maskify(""));
// ''
console.log(maskify("paypalisgreat"));
// paypalisgreat
