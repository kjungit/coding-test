function solution(str_list) {
    const l_str = str_list.findIndex((item) => item === 'l')
    const r_str = str_list.findIndex((item) => item === 'r')
    if (l_str === -1 && r_str === -1) return []
    if (l_str === -1) return str_list.slice(r_str + 1);
    if (r_str === -1) return str_list.slice(0, l_str);
    return l_str < r_str ? str_list.slice(0, l_str) : str_list.slice(r_str + 1);
}    