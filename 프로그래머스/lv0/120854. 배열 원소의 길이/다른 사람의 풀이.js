// map
function solution(strlist) {
    return strlist.map((el) => el.length)
}

// forEach
function solution(strlist) {
    var answer = [];
    strlist.forEach(el=>answer.push(el.length))
    return answer;
}
