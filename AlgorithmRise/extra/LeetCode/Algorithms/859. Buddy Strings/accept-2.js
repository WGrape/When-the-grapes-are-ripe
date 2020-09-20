/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {

    let len1 = A.length, len2 = B.length;
    if( len1 != len2 ){
        return false;
    }

    let ascii1 = 0, ascii2 = 0;
    let no_match = 0, hash1 = {}, hash2 = {}, repeat = false;
    for( let i = 0; i<=len1-1; ++i ){

        ascii1 += A[i].charCodeAt();
        ascii2 += B[i].charCodeAt();

        hash1[A[i]] = hash1[A[i]] ? hash1[A[i]]+1 : 1;
        hash2[B[i]] = hash2[B[i]] ? hash2[B[i]]+1 : 1;

        if(hash1[A[i]] > 1 || hash2[B[i]] > 1){
            repeat = true;
        }

        if( A[i] != B[i] ){
            ++no_match;
        }
    }

    let key_num1 = Object.getOwnPropertyNames(hash1).length;
    let key_num2 = Object.getOwnPropertyNames(hash2).length;
    if(A == B){
        if(repeat){
            return true;
        }
        return false;
    }

    return ascii1 == ascii2 && no_match <= 2;
};