function solution(slice, n) {

    for (let i=1; i<50; i++) {
        if (n%slice == 0) {
            return n/slice;
        } else if (n%slice !==0) {
            return parseInt(n/slice) + 1;
        }
    }
}