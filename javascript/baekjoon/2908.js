const a = 734;
const b = 893;
const first = String(a);
const second = String(b);

const arra = first.split("").reverse();
const arrb = second.split("").reverse();
console.log(a < b ? arra.join("") : arrb.join(""));
