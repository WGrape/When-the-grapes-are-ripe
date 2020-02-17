/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {

    let left_count = right_count = 0, stack = [], result = "", length = S.length;

    for( let i = 0; i<=length-1; ++i ){

        stack.push( S[i] );

        if( '(' == S[i] ){
            ++left_count;
            continue;
        }else{
            ++right_count;
        }

        if(left_count == right_count){
            stack.shift();
            stack.pop();
            result += stack.join("");
            stack = [];
            left_count = right_count = 0;
        }
    }

    return result;
};