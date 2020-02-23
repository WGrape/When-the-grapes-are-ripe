function equar(a, b) {
    // 判断数组的长度
    if (a.length !== b.length) {
        return false
    } else {
        // 循环遍历数组的值进行比较
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    }
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    let stack1 = [], stack2 = [];
    for( let c of s ){
        stack1.push( s.indexOf(c) );
    }
    for( let c of t ){
        stack2.push( t.indexOf(c) );
    }

    return equar(stack1, stack2);
};