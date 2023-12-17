function solution(n) {
    var answer = 0;
    
    
    const split = n.toString().split('');
    const result = split.sort((a,b)=>(b-a)).join('');
    answer = Number(result);
    return answer;
}