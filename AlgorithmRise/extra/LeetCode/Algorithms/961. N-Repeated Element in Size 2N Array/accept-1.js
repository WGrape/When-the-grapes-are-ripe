/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    
    let length = A.length;

    A.sort( (a,b)=>a-b ); // A.sort( (a,b)=>{a-b} ); 是错误的写法

    for( let i=1; i<=length-1; ++i ){
        if( A[i-1] === A[i] ){
            return A[i];
        }
    }

    return 0;
};