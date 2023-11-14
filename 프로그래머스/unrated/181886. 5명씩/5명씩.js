// function solution(names) {
//     var answer = [];
//     return answer;
// }

// names 는 문자열배열
// 일단 문자열배열의 요소의 숫자니까 names.length 가 필요? 
// 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return
// 앞에서 부터 5명씩이면 slice 인가??
// 그 중에서 1번째니까 slice의 두번째 인자로 1을 넣으면되나?

// let numbers = names.length;
// numbers[0];
// numbers[5];
// numbers[10]; ...

// for (let i = 0; i<names.length; i++){
//     if(numbers[i]==);
// }

function solution(names) {
    const groups = [];
    let i = 0;
        while (i < names.length) {
            groups.push(names.slice(i, i + 5));
            i += 5;
        }
    return groups.map(group => group[0]);
}
