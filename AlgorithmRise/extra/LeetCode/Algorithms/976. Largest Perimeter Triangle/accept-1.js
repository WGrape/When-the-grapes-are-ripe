/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {

    A.sort((a, b) => a-b);

    let length = A.length, index = length;
    while(1){

        if( index-1 < 0 || index-2 < 0 || index-3 < 0 ){
            return 0;
        }

        let a = A[index-3];
        let b = A[index-2];
        let c = A[index-1];

        // (a+b)>c 而不是 (a+b)>=c
        if(a && b && c && (a+b)>c){
            return a+b+c;
        }

        --index;
    }
};