let canAfford = (itemPrice, accountBal) => {
  return itemPrice > accountBal
    ? `cant afford $${itemPrice - accountBal}`
    : "can afford"
};

let bankAccount = 1000;
const drone = 1001

console.log(canAfford(drone, bankAccount));