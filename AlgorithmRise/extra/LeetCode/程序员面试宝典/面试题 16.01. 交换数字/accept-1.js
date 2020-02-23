/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function(numbers) {

    let a = numbers[0], b = numbers[1];
    numbers[0] = a ^ b ^ a;
    numbers[1] = b ^ a ^ b;

    return numbers;
};