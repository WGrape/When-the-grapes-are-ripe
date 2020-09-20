/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {

    // AB相邻的字符串不用处理, 相加就行
    let stack = [], nesting = 0, score = 0;
    for( let c of S ){

        if('(' == c){
            nesting = 0;
            stack.push(c);
        }else{

            ++nesting;
        }

        sum += (nesting*1)

    }
};