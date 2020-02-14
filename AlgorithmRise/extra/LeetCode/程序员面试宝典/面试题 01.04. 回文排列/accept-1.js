/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {

    s.replace(" ", "").toLowerCase();
    let length = s.length, times = {};

    if( length < 1 ){
        return true;
    }

    for( let i = 0; i<=length-1; ++i ){
        
        if( !times[ s[i] ] ){
            times[ s[i] ] = 0;
        }
        ++times[ s[i] ];
    }

    let unique_chars = Object.getOwnPropertyNames(times);
    let unique_char_num = unique_chars.length;

    // length 为奇数, 1个字符出现1次, 其他的都出现偶数次
    if( length%2 ){

        let count = 0;
        for(let c of unique_chars){
            if( times[c]%2 ){
                ++count;
            }
            if( count > 1 ){
                return false;
            }
        }
        return true;
    }else{

        // length 为奇数, 每个字符都出现偶数次
        let num = times[ s[0] ];
        for(let c of unique_chars){
            if( times[c]%2 ){
                return false;
            }
        }
        return true;
    }


};