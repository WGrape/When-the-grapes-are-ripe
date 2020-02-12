/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    
    let str = parseInt(n).toString(2), length = str.length;

    for( let i = 0; i<=length-2; ++i ){
        if( str[i+1] == str[i] ){
            return false;
        }
    }

    return true;
};

// 这题我把 全等符号 改成 == 就把运行速度小了一半 。。。。