/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

    if(!s){
        return 0;
    }

    let stack = [], count = 0, max = 0;
    for( let c of s ){

        if('(' == c){
            stack.push(c);
            continue;
        }

        let length = stack.length;
        if( !length || stack[length-1] != "(" ){
            stack.push(")");
            count = 0;
        }else{
            stack.pop();
            ++count;
        }

        max = Math.max(max, count);
    }

    return max*2;
};