/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    let pr = 0, index = false, length = haystack.length, len = needle.length;

    if( !len ){
        return 0;
    }

    for( let i = 0; i<=length-1; ++i ){

        if(haystack[i] == needle[pr]){
            ++pr;
            if( false === index ){
                index = i;
            }
        }else{
            
            pr = 0;
            index = false;
        }

        if( pr > len-1 ){
            return index;
        }
    }

    return -1;

};