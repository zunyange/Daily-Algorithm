// function solution(num_list) {
//     var answer = 0;
    
//     for (let i=0; i<num_list.length; i++) {
//         if (num_list[i] < 0) {
//             return answer = i;   ->  0보다 큰 인덱스가 하나라도 있으면 전부 -1을 반환
//         } else {
//             return answer = -1;
//         }
//     }
//     return answer;
// }

const solution = num_list => num_list.findIndex(v => v < 0)