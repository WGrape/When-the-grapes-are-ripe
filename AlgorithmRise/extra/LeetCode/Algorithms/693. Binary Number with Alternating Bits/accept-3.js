/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    
    let str = parseInt(n).toString(2), length = str.length;

    return !( str.indexOf("11") > -1 || str.indexOf("00") > -1 );
};

// 只是看到评论中有这个解法，但是运行速度并不如 accept-2
