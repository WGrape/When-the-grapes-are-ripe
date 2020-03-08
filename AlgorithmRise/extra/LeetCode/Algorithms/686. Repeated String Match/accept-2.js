/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {

    let times = 1, _A = A, loop = (A.length<=B.length) ? Math.ceil(B.length/A.length) : 2;
    
    while(A.indexOf(B) < 0){
        if(times > loop){
            return -1;
        }
        ++times;
        A = A.concat(_A);
    }

    return times;
};