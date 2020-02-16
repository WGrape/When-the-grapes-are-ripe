/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    
    let stack = [], length = S.length;

    for( let i = 0; i<=length-1; ++i ){
        if( !stack.length || stack[ stack.length-1 ] != S[i]){
            stack.push( S[i] );
        }else{
            stack.pop();
        }
    }

    return stack.join("");
};