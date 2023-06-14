// replaceAll
function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}

// 정규식 
function solution(my_string, letter) {
    let reg = new RegExp(letter, 'g');
    return my_string.replace(reg, '');
}

// Array.from
function solution(my_string, letter) {
    return Array.from(my_string).filter(t => t !== letter).join('');
}

// 반복문
function solution(my_string, letter) {
  // 1.my_string 문자열에서 letter 매개변수값을 제거하는 방식으로 한 결과값을 도출 하면 될 것 같다.
  // 2.그러면 이 String 값을 배열화하고 여기서 특정값을 제거하는 메소드가 있다면 찾아서 쓰고 먄약 없으면,
  // 3.my_string값을 배열화해서 그 배열인덱스에서 순회하면서 검사하면서 지울 수 있도록 한다.
  const arr = my_string.split("");
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === letter) {
      // arr.splice(i, 1);
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  const answer = result.join("");
  return answer;
}
