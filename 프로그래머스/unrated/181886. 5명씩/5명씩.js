function solution(names) {
    var answer = [];
    
    answer = names.filter((_, i) => !(i%5));
    
    return answer;
}