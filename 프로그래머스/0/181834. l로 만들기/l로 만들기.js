function solution(myString) {
    const BASE_VALUE = "l".charCodeAt()
    
    return myString.split("").map((i)=> BASE_VALUE > i.charCodeAt() ? 'l' : i).join("");
}