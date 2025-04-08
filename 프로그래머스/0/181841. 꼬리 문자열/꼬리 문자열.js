function solution(str_list, ex) {
    return str_list.filter((i) => !i.includes(ex)).join("");
}