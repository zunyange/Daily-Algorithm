// 깔끔
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

// 이 코드 외에 모두 같은 방법
function solution(array) {
    var answer = 0;
    let number = array.length/2;
    let tmpNum = 0;
    while(ascCheck(array)){
        for(let i = 0; i<array.length;i++){
            if(array[i]>array[i+1]){
                tmpNum=array[i];
                array[i]=array[i+1];
                array[i+1]=tmpNum;
            }
        }    
    }

    number= Math.round(number);
    answer=array[number-1];
    return answer;
}

function ascCheck(array){
    for(let i=0;i<array.length;i++){
        if(array[i]>array[i+1]){
            return true;
        }
    }
    return false;
}
