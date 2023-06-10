function solution(s1, s2) {
    var answer = s1.filter(x => s2.includes(x));
        return answer.length;
    //     var answer = 0;
    //     for(var i=0; i<s1.length; i++) {
    //         for(var j=0; j<s2.length; j++) {
    //         if(s1[i] === s2[j]) 
    //             answer++;
    //         }
    //     }
    // return answer;

}
