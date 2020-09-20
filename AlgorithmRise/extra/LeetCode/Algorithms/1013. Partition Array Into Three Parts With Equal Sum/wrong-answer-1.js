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
    for( let num of A ){

        temp_sum += num;
        if(sum/3 == temp_sum){
            ++times;
            temp_sum = 0;
        }
    }

    return 3 == times;
};