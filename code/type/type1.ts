
function addVAT(price: number, vat: number = 0.2):number {
  return price * (1 + vat);
}

let r1 = addVAT(1000);

console.log(r1);
