function solution(order) {
    return order.reduce((acc, cur) => {
        if(cur.includes('anything')) return acc + 4500
        return acc + (cur.includes('americano') ? 4500 : 5000)
    }, 0);
}