/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {

    let length = A.length;
    let flow = 1; // 上升

    if(length<3){
        return false;
    }

    for( let i = 1; i<=length-1; ++i ){

        if(flow){
            if( A[i] < A[i-1] ){
                
                if(1 == i){
                    return false;
                }
                flow = 0;
            }else if( A[i] == A[i-1] ){
                return false;
            }
        }else{

            if(A[i]>=A[i-1]){
                return false;
            }
        }
    }

    return true;
};