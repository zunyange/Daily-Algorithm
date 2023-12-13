function solution(num_list) {
    
    for (let i = 0; i<num_list.length; i++) {
        if (num_list.length >= 11) {
            return num_list.reduce((a,b) => a+b, 0);
        } else {
            return num_list.reduce((a,b) => a*b, 1);
        }
    
    }
}