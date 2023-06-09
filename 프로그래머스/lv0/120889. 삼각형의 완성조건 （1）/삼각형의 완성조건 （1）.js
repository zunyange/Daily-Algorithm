function solution(sides) {
    
    sides.sort((a, b) => a - b);
    for (let i=0; i<sides.length; i++) {
        if (sides[0] + sides[1] <= sides[2]) {
            return 2;
        } else if (sides[0] + sides[1] > sides[2]) {
            return 1;
        }
    }
}