/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    
    let isomorphic = [];
    for( let c of pattern ){
        isomorphic.push( pattern.indexOf(c) );
    }

    let result = [];
    for( let word of words ){

        let i;
        for( i = 0; i<=word.length-1; ++i ){

            if( isomorphic[i] != word.indexOf( word[i] ) ){
                break;
            }
        }
        if(i > word.length-1){
            result.push(word);
        }
    }

    return result;
};