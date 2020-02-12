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

    for( let i = 0; i<=length-1; ){

        if(haystack[i] == needle[pr]){
            ++pr;
            if( false === index ){
                index = i;
            }
            ++i;
        }else{
            
            if( pr > 1 ){
                i = index+1;
                index = i;
            }else{
                ++i;
                index = false;
            }

            pr = 0;
        }

        if( pr > len-1 ){
            return index;
        }
    }

    return -1;

};