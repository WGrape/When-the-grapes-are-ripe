/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    for( let c of s1 ){

        if( s2.indexOf(c) < 0 ){
            return false;
        }
    }

    return true;
};

// 我理解错题意了