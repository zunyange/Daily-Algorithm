function solution(n) {
    var answer = 0;
    for (let i=1; i<15; i++) {
        if (n%7 == 0) {
            return n/7;
        } else if (n%7 !== 0) {
            return parseInt(n/7) +1;
        }
    }
    return answer;
}