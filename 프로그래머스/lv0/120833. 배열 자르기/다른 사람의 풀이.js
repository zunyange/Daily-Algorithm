// splice
function solution(numbers, num1, num2) {
    return numbers.splice(num1, num2-num1+1);
}

// push
function solution(numbers, num1, num2) {
    var answer = [];

    for (let i = num1; i < num2+1; i++) {
        answer.push(numbers[i])
    }

    return answer;
}
