/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    
    let length = s.length, stack = [];

    for( let i = 0; i<=length-1; ){

        if( '#' === s[i+2] ){

            stack.push( String.fromCharCode(96+parseInt(s.slice(i, i+3))) );
            i+=3;
            continue;
        }

        stack.push( String.fromCharCode(96+parseInt(s[i])) );
        ++i;
    }

    return stack.join("");
};