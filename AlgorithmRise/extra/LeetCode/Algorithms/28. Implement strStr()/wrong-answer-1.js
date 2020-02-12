/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    let pr = index = 0, length = haystack.length, len = needle.length;

    if( !len ){
        return 0;
    }

    for( let i = 0; i<=length-1; ++i ){

        if(haystack[i] == needle[pr]){
            ++pr;
            if( !index ){
                index = i;
            }
        }else{
            
            pr = 0;
            index = 0;
        }

        if( pr > len-1 ){
            return index;
        }
    }

    return -1;

};