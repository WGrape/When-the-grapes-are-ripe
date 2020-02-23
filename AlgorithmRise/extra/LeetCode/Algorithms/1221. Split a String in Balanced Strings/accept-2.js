/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    let balance = 0, length = s.length, count = 0;
    for( let i = 0; i<=length-1; ++i ){

        if( "R" == s[i] ){
            --balance;
        }else{
            ++balance;
        }

        if( 0 == balance ){
            ++count;
            balance = 0;
        }
    }

    return count;
};