// i+=2
function solution(n) {
    var answer = [];

    for (let i = 1; i<=n; i+=2) answer.push(i)

    return answer;
}

// index 활용 fill & filter
function solution(n) {
    return Array(n).fill(1).map((v,i)=>v+i).filter(v=>v%2===1);
}
