function solution(my_string) {
    const split = my_string.split("");
    const reverse = split.reverse();
    const join = reverse.join("");
    return join;
}