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

    // 如果A==B, 则A中是否存在重复的字母决定了是否可以交换成功
    // 因为如果有出现1次以上的字符的话, 这两个字符交换就可以成功
    if(A == B){
        return repeat;
    }

    return ascii1 == ascii2 && no_match <= 2;
};