function solution(myString, pat) {
    var answer = 0;
    
    const same = pat.toLowerCase();
    answer = myString.toLowerCase().includes(same) ? 1 : 0;
    
    return answer;
}