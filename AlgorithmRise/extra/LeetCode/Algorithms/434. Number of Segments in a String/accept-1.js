/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {

    let i = 0, count = 0;
    while(s[i]){

        if( " " !== s[i] && ( !s[i-1] || " " === s[i-1] ) ){
            ++count;
        }
        ++i;
    }

    return count;
};