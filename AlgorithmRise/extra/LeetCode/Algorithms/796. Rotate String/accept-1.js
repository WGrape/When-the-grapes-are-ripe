/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {

    // 长度相等, ascii码相等
    let len1 = A.length, len2 = B.length;
    if(len1 != len2){
        return false;
    }

    return (A+A).indexOf(B) > -1 ? true : false;
};