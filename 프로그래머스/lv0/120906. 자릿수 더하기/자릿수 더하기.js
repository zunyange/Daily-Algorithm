function solution(n) {
    var answer = 0;
    const newArr = Array.from(String(n), Number);
    
    for (let i=0; i<newArr.length; i++) {
        answer = answer + newArr[i]
    }
    return answer;
}