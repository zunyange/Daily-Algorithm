// for of 

function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}

// 배열을 바로 return

function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length,
  ];
}

// filter

function solution(num_list) {
    return [num_list.filter(v=>v%2===0).length, num_list.filter(v=>v%2===1).length];
}

// reduce

function solution(list) {
    return list.reduce((acc, cur) => (cur & 1 ? acc[1]++ : acc[0]++, acc), [0, 0])
}
