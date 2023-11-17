//for 문 i--
function solution(start, end) {
    var answer = [];

    for(let i = start; i>=end; i--){
        answer.push(i)
    }

    return answer;
}

//fill & map
const solution = (start, end) => Array(start-end+1).fill(start).map((v,i)=>v-i);
