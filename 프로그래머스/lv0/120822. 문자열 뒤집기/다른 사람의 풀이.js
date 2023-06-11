// spread

function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}

// 한줄로 축약

function solution(my_string) {
    return my_string.split('').reverse().join('');
}

// charAt : 문자열의 i 번째 문자를 반환

function solution(my_string) {
    let answer = ''
    for(let i = my_string.length; i >= 0; i--) {
        answer += my_string.charAt(i)
    }
    return answer;
}

