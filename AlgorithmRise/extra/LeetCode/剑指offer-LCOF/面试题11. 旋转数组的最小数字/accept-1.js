/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {

    let min = Infinity;
    for( let number of numbers ){
        min = Math.min( min, number );
    }

    return min;
};