/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    
    let count = 0;

    while( 0 != n ){

        ++count;
        n &= (n-1);
    }

    return count;
};