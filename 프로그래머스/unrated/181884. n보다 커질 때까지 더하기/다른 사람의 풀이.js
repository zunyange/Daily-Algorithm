//break
function solution(numbers, n) {
  let sum = 0;

    for(let i = 0; i<numbers.length; i++) {
      sum += numbers[i]
      if(sum > n) break;
    }
    return sum;
}

//i++
function solution(numbers, n) {
    var answer = 0;
    let i = 0;
    while(answer <= n) {
        answer += numbers[i++]
    }
    return answer;
}

//reduce
function solution(numbers, n) {
    return numbers.reduce((a,c,i,t)=>(a<=n)?a+c:a)
}
