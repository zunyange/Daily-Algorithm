function solution(num, n) {
    var answer = 0;
    
    if (num%n === 1) {
        answer = 0; 
    } else if (num%n === 0) {
        answer = 1;
    }
    return answer;
}