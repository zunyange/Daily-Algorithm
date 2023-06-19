// Number.isInteger : 주어진 값이 정수인지 판별

function solution(n) {
    let ans = 0;
    for (let i = 1; i < Math.sqrt(n); i++)
        if (n%i === 0) ans+=2;

    return Number.isInteger(Math.sqrt(n)) ? ans+1 : ans;
}

// 배열로 변환후 fill

function solution(n) {
//    n이 매개변수로 주어질때 곱이 n
//    for문으로 구할 때 
//    let cnt = 0;
//    for(let i = 1; i<=n; i++){

//        if (n % i === 0) {
//            cnt++;
//        }
//    }
//    return cnt;

//    for문으로 안구할 때
      return Array(n).fill(1).map((v,idx) => v + idx).filter(v => n % v === 0).length

}

// fill 메서드
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]
