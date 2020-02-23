/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    
    if(0 == x){
        return 0;
    }
    if(0 == n || 1 == x){
        return 1;
    }

    let _n = Math.abs(n), _x = 1;
    if( _n >= 4000000 ){
        return 0;
    }
    for( let i = 1; i<=_n; ++i ){
        _x *= x;
    }
    
    if( n<0 ){
        return 1/_x;
    }

    return _x;
};