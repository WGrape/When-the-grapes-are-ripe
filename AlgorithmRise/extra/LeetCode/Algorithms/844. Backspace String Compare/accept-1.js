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
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {

    let stack1 = [], stack2 = [];
    for(let c of S){
        if('#' == c){
            stack1.pop();
        }else{
            stack1.push(c);
        }
    }

    for(let c of T){
        if('#' == c){
            stack2.pop();
        }else{
            stack2.push(c);
        }
    }

    return equar(stack1, stack2);
};