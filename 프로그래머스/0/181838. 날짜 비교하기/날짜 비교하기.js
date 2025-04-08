function solution(date1, date2) {
    const [year, month, day] = date1;
    const datef = new Date(year, month - 1, day);
    const [years, months, days] = date2;
    const dates = new Date(years, months - 1, days);

    return datef < dates ? 1 : 0
}