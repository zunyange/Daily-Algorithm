// 오름차순 후 뒤부터 1번째,2번째 

function solution(numbers) {
    numbers = numbers.sort((a, b) => a - b);
    return numbers.at(-1) * numbers.at(-2);
}

// splice

function solution(numbers) {
    const max1 = numbers.reduce((max, n) => max > n ? max : n, 0)
    const index = numbers.findIndex((n) => n === max1);

    numbers.splice(index, 1)

    const max2 = numbers.reduce((max, n) => max > n ? max : n, 0)

    return max1 * max2;
}
