function solution(num_list) {
    var answer = 0;
    
    const odd = num_list.filter(el=>(el%2===1));
    const even = num_list.filter(el=>(el%2===0));
    
    answer = Number(odd.join('')) + Number(even.join(''));
    return answer;
}