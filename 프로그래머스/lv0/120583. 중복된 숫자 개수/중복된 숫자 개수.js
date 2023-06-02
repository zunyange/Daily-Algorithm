function solution(array, n) {
    var n_number = 0;
    
    for (i=0;i<array.length;i++){
        if (array[i]==n) {
            n_number++
        }
    }
    
    return n_number;
}