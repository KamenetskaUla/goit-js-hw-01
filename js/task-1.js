function makeTransaction(quantity, pricePerDroid) {
  console.log(
    `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits! `
  );
}
makeTransaction(10, 500);
