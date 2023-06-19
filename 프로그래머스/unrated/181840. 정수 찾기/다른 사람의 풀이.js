// for of 
// 처음부터 answer을 0으로 선언해줬으니 else문이 필요없음.

function solution(num_list, n) {
    var answer = 0;

    for(let i of num_list){
        if(i==n){
            return 1;
        }
    }

    return answer;
}

// 삼항연산자

function solution(num_list, n) {
  return num_list.includes(n) ? 1 : 0;
}
