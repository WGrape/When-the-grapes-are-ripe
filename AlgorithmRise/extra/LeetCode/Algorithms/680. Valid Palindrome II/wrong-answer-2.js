var strRemove = function(str, i){
    return str.substr(0, i) + str.substr(i+1);
}

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

    let length = s.length;
    for( let i = 0; i<=length-1; ++i ){

        let _s = strRemove(s, i), len = _s.length;
        let index = 0, end = len%2 ? (len>>1)-1 : (len>>1)-2;
        while( index <= end ){
            if( _s[index] == _s[ len-1-index ] ){
                ++index;
            }else{
                break;
            }
        }
        if( index > end ){
            return true;
        }
    }

    return false;
};