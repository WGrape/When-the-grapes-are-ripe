/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    
    let n = 1, _num = num;

    while( Math.floor(_num/2) ){

        _num = Math.floor(_num/2);
        n = n*2+1;
    }
    
    return num ^ n;
};