/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {

    let length = numbers.length,
        end = Math.floor(length/2),
        rotate_numbers = numbers.slice(end).concat( numbers.slice(0, end) ),
        min = Infinity;

    for( let i = 0; i<=end; ++i ){
        
        min = Math.min(min, numbers[i]);
        min = Math.min(min, rotate_numbers[i]);
    }

    return min;
};