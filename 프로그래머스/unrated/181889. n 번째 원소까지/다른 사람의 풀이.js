// slice
function solution(num_list, n) {
    return num_list.slice(0, n);
}

// splice 
// slice 와 차이점 알기
function solution(num_list, n) {
    return num_list.splice(0, n)
}

// filter
function solution(num_list, n) {
    var answer = num_list.filter((item,index)=>index<n);
    return answer;
}
