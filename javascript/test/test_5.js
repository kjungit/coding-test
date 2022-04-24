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

/**
 * 변수를 계속 만들어서 단계별로 첫번째 글자는 대문자로 만들고 나머지 글자는 소문자로 변경을 했다.

앞글자 하나만 변경하고 slice로 붙이기만 하면 되는 문제였다.

복잡한 for문에 변수는 5개나 만들어버렸다.

여러가지 방법으로 생각을 했어야했다.!!!!!

앞으로는 배열이 나오면 for of를 먼저 생각해야지..
 */
