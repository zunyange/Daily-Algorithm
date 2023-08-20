//
function solution(cipher, code) {
    return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
}

// 
function solution(cipher, code) {
    return cipher.split('').filter((v,i)=>(i+1)%code===0).join('');
}

// 
function solution(cipher, code) {
  var answer = "";

  for (let i = 0; i < cipher.length; i++) {
    if ((i + 1) % code === 0) {
      answer += cipher[i];
    }
  }
  return answer;
}
