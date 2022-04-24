function answer(str) {
  let fix_str = "";

  let res = str.split(" ");
  let res_2;
  let res_3;
  let res_4;
  let res_5 = [];
  for (let i = 0; i < res.length; i++) {
    res_2 = res[i].substring(0, 1).toUpperCase();
    res_3 = res[i].substring(1).toLowerCase();
    res_4 = res_2 + res_3;
    res_5.push(res_4);
  }
  fix_str = res_5.join(" ");

  return fix_str;
}
