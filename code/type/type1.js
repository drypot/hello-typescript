"use strict";
function addVAT(price, vat = 0.2) {
    return price * (1 + vat);
}
let r1 = addVAT(1000);
console.log(r1);
//# sourceMappingURL=type1.js.map