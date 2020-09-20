/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {

    let result = [0,0,1,0,1,1,1,0,1,0], count = 0;

    for(let i = n; i>=1; --i){
        if(0 == i%10){
            ++count;
        }
    }
};