/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {

    let nums = [1, 4, 16, 64, 256, 1024,4096,16384,65536,262144,1048576,4194304,16777216,67108864,268435456,1073741824,4294967296];

    return nums.indexOf(num) > -1 ? true : false;
};