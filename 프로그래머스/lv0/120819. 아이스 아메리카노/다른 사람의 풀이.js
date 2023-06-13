// while문
function solution(money) {
    let count = 0;
    while (money >= 5500) {
        money -= 5500;
        count++
    }
    return [count, money]
}

// double tilde

function solution(money) {
    return [~~(money/5500),money%5500];
}

// 각각 변수 선언

function solution(money) {
    let count = Math.floor(money / 5500);
    let remain = money - count * 5500;
    return [count, remain];
}
