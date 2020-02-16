/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {

    let stack = [];
    
    for( let i = 0; i<= A[0].length-1; ++i){

        let arr = [];
        for( let j = 0; j<= A.length-1; ++j ){
            arr.push( A[j][i] );
        }
        stack.push(arr);
    }

    return stack;
};