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

    // length 为奇数, 1个字符出现1次, 其他的都出现偶数次
    let count = 0;
    let unique_chars = Object.getOwnPropertyNames(times);
    for(let c of unique_chars){
        if( times[c]%2 ){
            ++count;
        }
    }

    // 长度为偶数, 则不能有出现奇数个的数
    // 长度为奇数, 则只能有1个出现奇数个的数
    if( length % 2 ){
        return 1 === count;
    }else{
        return 0 === count;
    }

};