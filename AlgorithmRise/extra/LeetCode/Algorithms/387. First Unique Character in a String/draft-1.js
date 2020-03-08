/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    let length = s.length;
    for( let i = 0; i<=length-1; ++i ){

        let substr = s.slice(i+1);
        console.log(substr);
        if( substr.indexOf(s[i]) < 0 ){
            return i;
        }
    }
    return -1;
};

// 必须用 hash 记录, 因为如果e重复, 但是最后一个e会被判定为非重复