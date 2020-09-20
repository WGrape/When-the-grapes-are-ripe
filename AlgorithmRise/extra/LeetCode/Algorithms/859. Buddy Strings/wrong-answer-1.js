/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {

    let len1 = A.length, len2 = B.length;
    if( len1 != len2 || A == B ){
        return false;
    }

    let ascii1 = 0, ascii2 = 0;
    for(let i =0; i<=len1-1; ++i){

        ascii1 += A[i].charCodeAt();
        ascii2 += B[i].charCodeAt();
    }

    return ascii1 == ascii2;
};