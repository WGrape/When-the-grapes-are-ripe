var insertStr = function(soure,start, newStr){
    return soure.slice(0, start) + newStr + soure.slice(start)
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    let result = [ [""], ["()"] ], hash = {};
    for( let i = 2; i<=n; ++i ){

        let str = result[i-1], stack = [];
        for( let j = 0; j<=str.length; ++j ){

            let s = insertStr(str, j, "()");
            if(!hash[s]){
                hash[s] = 1;
                stack.push(s);
            }
        }
        result[i] = stack;
    }

    console.log(result);
    return result[n];
};