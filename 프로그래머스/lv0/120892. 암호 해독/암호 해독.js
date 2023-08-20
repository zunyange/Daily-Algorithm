function solution(cipher, code) {
    var answer = '';
    
    for (let i = code - 1; i < cipher.length; i += code) {
        console.log(cipher[i])
        answer = answer + cipher[i];
    }
    return answer;
}