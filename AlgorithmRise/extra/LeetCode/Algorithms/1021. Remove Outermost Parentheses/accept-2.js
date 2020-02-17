/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {

    let left_count = right_count = 0, result = "", stack = [], block_end = false; // 一个部分

    for( let i = 0; i<=S.length-1; ++i ){

        stack.push( S[i] );

        if( '(' === S[i] ){
            ++left_count;
        }

        if( ')' === S[i] ){
            
            ++right_count;
        }

        if(left_count === right_count){
            stack.shift();
            stack.pop();
            result += stack.join("");
            stack = [];
            left_count = right_count = 0;
        }
    }

    return result;
};