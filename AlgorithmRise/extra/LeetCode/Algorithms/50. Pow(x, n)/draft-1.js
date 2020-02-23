/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    
    if(0 == x){
        return 0;
    }
    if(0 == n){
        return 1;
    }

    let _n = Math.abs(n);
    for( let i = 1; i<=_n; ++i ){
        x *= x;
    }
    
    if( n<0 ){
        return 1/x;
    }

    return x;
};