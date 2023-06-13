// for문
function solution(num_list) {
    var answer = [];
    var j = num_list.length
    for(var i = 1; i <= j; i++){
        answer.push(num_list[j-i])
    }
    return answer;
}

// unshift
function solution(num_list) {
    var answer = [];
    num_list.forEach(i => answer.unshift(i))
    return answer;
}

// push & pop
function solution(num_list) {
    var answer = [];
    while(num_list.length){
        answer.push(num_list.pop())
    }
    return answer;
}

