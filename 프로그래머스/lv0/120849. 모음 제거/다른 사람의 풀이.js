// replace, 정규표현식

function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

// includes는 배열 메소드이자 문자열 메소드

function solution(my_string) {
    return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}

//
function solution(my_string) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let strArr = [... my_string];
    let tmpIdxArr = [];

    // 모음인 단어의 인덱스를 배열에 저장
    for(let i = 0; i < strArr.length; i++) {
        vowel.forEach(function(v) {
            if(strArr[i] == v) {
                tmpIdxArr.push(i);
            }
        })
    }

    // 내림차순 정렬
    let sortArr = tmpIdxArr.sort(((a, b) => b - a));

    //배열에서 삭제
    for(let i = sortArr.length-1; i >= 0; i--) {
        delete strArr[sortArr[i]];
    }

    return strArr.join('');
}

// 
