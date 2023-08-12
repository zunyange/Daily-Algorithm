function solution(my_string) {
    var answer = 0;
    let split = my_string.split('');
    for (let i=0; i<split.length; i++) {
        if (Number(split[i]))  {
            answer = answer + Number(split[i])
        }
}
    
    return answer;
}