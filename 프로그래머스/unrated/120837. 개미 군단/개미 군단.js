function solution(hp) {
    var answer = 0;
    
    const hp5 = Math.floor(hp/5);
    const hp3 = Math.floor((hp%5)/3);
    const hp1 = ( hp % 5 ) % 3;
    
    answer = hp5 + hp3 + hp1;
    
    return answer;
}

