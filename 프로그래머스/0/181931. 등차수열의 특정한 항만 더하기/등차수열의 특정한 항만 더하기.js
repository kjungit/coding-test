function solution(a, d, included) {
    var answer = 0;
    let count = a
    for(let i = 0; i < included.length; i++){
      if(i === 0 && included[i]) {
          answer += count
      }
        
      if(i  > 0) {
        count += d
      }
        
      if(i !== 0 && included[i]) {
         answer += count
      }
      console.log(count)
    }
    
    return answer;
}