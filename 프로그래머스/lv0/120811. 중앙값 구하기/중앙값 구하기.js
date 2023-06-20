function solution(array) {
    const array2 = array.sort((a,b) => a-b);
    console.log(array2);
    const middle = Math.ceil(array2.length / 2);
    return array2[middle-1];

}