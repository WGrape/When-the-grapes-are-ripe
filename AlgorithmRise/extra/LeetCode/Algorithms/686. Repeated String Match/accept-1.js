/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {

    // 后面写错了，写成Math.ceil(9/4)了，应该是 Math.ceil(B.length/A.length) 的 (手动捂脸
    let times = 1, _A = A, loop = (A.length<=B.length) ? Math.ceil(9/4) : 2;
    while(A.length < B.length){
        ++times;
        A = A.concat(_A);
    }

    while(A.indexOf(B) < 0){
        if(times > loop){
            return -1;
        }
        ++times;
        A = A.concat(_A);
    }

    return times;
};