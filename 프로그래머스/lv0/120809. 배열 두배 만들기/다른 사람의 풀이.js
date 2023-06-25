// reduce
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}

// 반복문
function solution(numbers) {
    var answer = [];
    for(var i=0; i<numbers.length;i++){
        answer[i]=numbers[i]*2;
    }

    return answer;
}
