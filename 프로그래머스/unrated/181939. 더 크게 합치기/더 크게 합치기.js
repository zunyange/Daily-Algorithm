function solution(a, b) {
    var answer = 0;
    
    const AB = String(a) + String(b);
    const BA = String(b) + String(a);
    
    if (AB > BA) {
        return Number(AB);
    } else {
        return Number(BA);
    }
    
}