const constant = {
  č: "c=",
  ć: "c-",
  dž: "dz=",
  đ: "d-",
  lj: "lj",
  nj: "nj",
  š: "s=",
  ž: "z=",
};

let str = "dz=ak";
let inc = "";
let ex = "";
let count = 0;
for (let i = 0; i < Object.values(constant).length; i++) {
  inc = Object.values(constant)[i];
  if (str.includes(inc)) {
    str = str.replace(inc, " ");
    count++;
    i--;
  }
}
console.log(str);
let result = str.replace(/ /g, "");
console.log(count + result.length);
