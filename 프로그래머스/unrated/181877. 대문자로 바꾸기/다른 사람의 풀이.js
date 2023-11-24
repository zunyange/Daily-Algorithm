// 한줄로 끝내버리기!
const solution=s=>s.toUpperCase()

// for문
function solution(myString) {
    var answer = '';
    for (let i=0; i<myString.length; i++) {
        let char = myString.charAt(i);
        if (char === char.toLowerCase()) {
            answer += char.toUpperCase()
        } else {
            answer += char;
        }
    }



    return answer;
}

// replace 
function solution(myString) {
  return myString.replace(/[a-z]/g, (match) => match.toUpperCase())
}
