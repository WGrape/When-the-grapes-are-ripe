/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {

    let sum = 0;
    for( let num of A ){
        sum += num;
    }

    if(sum%3){
        return false;
    }

    let temp_sum = 0, times = 0;
    for(let i = 0; i<=A.length-1; ++i){
        
        let num = A[i];
        temp_sum += num;
        if(sum/3 == temp_sum){
            ++times;

             if(2 == times){
                return i <= A.length-2 && sum/3 == (sum - 2*temp_sum);
            }
            temp_sum = 0;
        }
    }

    return 3 == times;
};