/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    
    let length = s.length, stack = [];

    for( let i = length-1; i>=0; ){

        if( '#' === s[i] ){
            
            stack.unshift( String.fromCharCode(96+parseInt(s.slice(i-2, i+1))) );
            i-=3;
            continue;
        }
    
        stack.unshift( String.fromCharCode(96+parseInt(s[i])) );
        --i;
    }

    return stack.join("");
};

// 这个是用官方给出提示的那种方法 去写的 答案

