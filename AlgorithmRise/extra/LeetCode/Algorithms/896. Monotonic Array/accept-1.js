/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {

    let flow = 0; // 0平稳, 1递增, 2下降
    for( let i = 1; i<=A.length-1; ++i ){

        switch(flow){

            case 0:
                if( A[i] > A[i-1] ){
                    flow=1;
                }else if( A[i] < A[i-1] ){
                    flow=2;
                }
                break;

            case 1:
                if( A[i] < A[i-1] ){
                    return false;
                }
                break;

            case 2:
                if( A[i] > A[i-1] ){
                    return false;
                }
                break;

            default:break;
        }
    }

    return true;
};