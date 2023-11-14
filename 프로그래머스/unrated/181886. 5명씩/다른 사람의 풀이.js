//for문(1)
function solution(names) {
    var answer = [];
    
    answer = names.filter((_, i) => !(i%5));
    
    return answer;
}

//for문(2)
function solution(names) {
    let result = [];

    for(let i = 0; i < names.length; i++) {
        if(i%5 == 0) {
            result.push(names[i]);
        }
    }

    return result;
}

//for문(2-1)
function solution(names) {
    var answer = [];
    for(let i = 0; i < names.length; i += 5){
        answer.push(names[i])
    }
    return answer;
}

//filter(1)
function solution(names) {
    return names.filter((v, idx) => idx % 5 === 0);
}

//filter(2)
const solution = names => names.filter((_, i) => !(i % 5))
