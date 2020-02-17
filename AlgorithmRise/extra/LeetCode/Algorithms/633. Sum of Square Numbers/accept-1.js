let map = [];

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    
    if(!c){
        return true;
    }

    let end = Math.floor(Math.sqrt(c));
    for( let i = 1; i<=end; ++i ){
        
        let left = c - i*i;
        if( left == Math.pow( Math.floor(Math.sqrt(left)), 2) ){
            return true;
        }
    }

    return false;
};