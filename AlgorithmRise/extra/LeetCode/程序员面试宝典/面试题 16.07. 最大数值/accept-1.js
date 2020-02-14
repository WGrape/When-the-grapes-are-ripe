/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function(a, b) {

    let arr = [ a, b ];

    return arr[ a < b ? 1 : 0 ];
};

// 数组法