// split 으로 기준점
function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2
}

// indexOf : 특정 문자열이 처음으로 나타나는 인덱스를 반환합니다. 만약 해당 문자열이 존재하지 않는다면, -1을 반환
function solution(str1, str2) {
    return str1.indexOf(str2) === -1 ? 2 : 1;
}

// 삼항연산자
function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}
