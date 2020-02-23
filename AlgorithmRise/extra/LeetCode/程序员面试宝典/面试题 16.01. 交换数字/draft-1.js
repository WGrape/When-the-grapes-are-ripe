/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function(numbers) {

    // 不要这样计算, 因为numbers中的数据已经被改变了
    numbers[0] = numbers[0] ^ numbers[1] ^ numbers[0];
    numbers[1] = numbers[1] ^ numbers[0] ^ numbers[1];

    // 应该定义变量
    let a = numbers[0], b = numbers[1];
    numbers[0] = numbers[0] ^ numbers[1] ^ numbers[0];
    numbers[1] = numbers[1] ^ numbers[0] ^ numbers[1];

    return numbers;
};