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

    let ascii1 = 0, ascii2 = 0, hash1 = {}, hash2 = {};
    for(let i =0; i<=len1-1; ++i){
        
        hash1[A[i]] = hash1[A[i]] ? ++hash1[A[i]] : 1;
        hash2[B[i]] = hash1[B[i]] ? ++hash1[B[i]] : 1;
        ascii1 += A[i].charCodeAt();
        ascii2 += B[i].charCodeAt();
    }

    if(ascii1 != ascii2){
        return false;
    }

    let key_num1 = Object.getOwnPropertyNames(hash1).length;
    let key_num2 = Object.getOwnPropertyNames(hash2).length;
    
    if( A == B && !(key_num1 == key_num2 && 1 == key_num1) ){
        return false;
    }
    return ascii1 == ascii2;
};