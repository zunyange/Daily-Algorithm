// while문

function solution(n) {
    let result = 0;

    while (n > 0) {
        result += n % 10;

        n = Math.floor(n/10);
    }

    return result;
}

// for문에서 바로 변환 가능

function solution(n) {
    var answer = 0;
    let str = String(n);
    for (let i =0; i <str.length; i++) {
      answer += Number(str[i]);
    }
    return answer;
}
