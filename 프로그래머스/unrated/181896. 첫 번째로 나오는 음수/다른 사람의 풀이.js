// for문을 쓰고 싶다면!
function solution(num_list) {
    let result = -1;

    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] < 0) {
            result = num_list.indexOf(num_list[i]);
            break;
        }
    }

    return result;
}
