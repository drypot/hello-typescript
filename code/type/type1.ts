
function addVAT(price: number, vat = 0.2) {
  return price * (1 + vat);
}

let r1 = addVAT(1000);
