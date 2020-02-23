/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    
    let length = A.length, map = {}, first = true, stack = {};
    for( let i=0; i<=length-1; ++i ){

        let len = A[i].length;
        for( let j=0; j<=len-1; ++j ){

            if( !map[ A[i][j] ] ){
                map[ A[i][j] ] = 0;
            }

            if( !stack[ A[i][j] ] ){

                ++map[ A[i][j] ];
                stack[ A[i][j] ] = 1;
            }
        }

        stack = {};
    }

    let len = A[0].length;
    stack = [];
    for( let i =0; i<=len-1; ++i ){
        if( map[ A[0][i] ] >= length && stack.indexOf( A[0][i] ) < 0 ){
            stack.push(A[0][i]);
        }
    }

    return stack;
};