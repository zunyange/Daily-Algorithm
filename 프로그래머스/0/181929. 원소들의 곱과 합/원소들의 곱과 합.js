function solution(num_list) {
    var sumx = 1;
    var sump = 0;
    
    for (let i=0; i<num_list.length; i++) {
        sumx *= num_list[i];
        sump += num_list[i];
    }
    return sumx > sump**2 ? 0 : 1;
}