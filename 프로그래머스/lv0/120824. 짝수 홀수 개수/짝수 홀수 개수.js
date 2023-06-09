function solution(num_list) {
    var answer = [];
    let even = 0;
    
    for (i=0; i<num_list.length; i++) {
    if(num_list[i] % 2 == 0) {
        even++;
    }
    }
    answer = [even, num_list.length-even]    
    return answer;
}