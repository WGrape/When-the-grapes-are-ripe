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
    // 错误是因为忘记加balance, 因为存在"((("这种情况
    return count;
};