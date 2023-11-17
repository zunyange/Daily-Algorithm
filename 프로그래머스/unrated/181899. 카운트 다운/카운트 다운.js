function solution(start, end_num) {
    var answer = [start];
    
    let start_num = start;
    for (let i=0; i<start-end_num; i++) {
        start_num -= 1;
        answer.push(start_num);
    }
        
    return answer;
}