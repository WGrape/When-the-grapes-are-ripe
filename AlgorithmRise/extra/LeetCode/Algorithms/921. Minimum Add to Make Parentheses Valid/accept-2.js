/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {

    // 经典括号匹配问题
    let balance = 0, length = S.length, count = 0;
    for( let i = 0; i<=length-1; ++i ){

        if( "(" == S[i] ){
            ++balance;
        }else{
            --balance;
        }

        if(balance < 0){
            ++count;
            balance = 0;
        }
    }

    // 因为 "(((" 存在这种情况, 所以需要加 balance
    return count + balance;
};