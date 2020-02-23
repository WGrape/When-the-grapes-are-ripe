/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    
    let count = 0, sum = 0;

    for( let i = 1; sum<n; ++i ){

        sum += i;
        if( sum <= n ){
            ++count;
        }

        if(sum>=n){
            return count;
        }
    }

    return count;
};