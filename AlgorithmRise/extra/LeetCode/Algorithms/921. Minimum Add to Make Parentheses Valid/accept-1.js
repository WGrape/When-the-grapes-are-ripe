/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {

    // 经典括号匹配问题
    let stack = [], length = S.length;
    for( let i = 0; i<=length-1; ++i ){

        if( "(" == S[i] ){
            stack.push("(");
        }else{

            if( "(" == stack[ stack.length-1 ] ){
                stack.pop();
            }else{
                stack.push(")");
            }
        }
    }

    return stack.length;
};