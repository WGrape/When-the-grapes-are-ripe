/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    
    let length = arr.length, avg = target / length;

    // 先对arr排序
    arr = arr.sort((a, b) => a-b);

    if( arr[0] >= avg ){

        // 使用avg
        let avg_h = Math.ceil(avg), avg_l = Math.floor(avg);
        return Math.abs(avg_h*length - target) < Math.abs(avg_l*length - target) ? avg_h : avg_l;
    }

    let sum = 0, distance_diff = 999999, result;
    for( let i = 0; i<=length-1; ++i ){

        if(sum + arr[i] > target){
            break;
        }
        sum += arr[i];

        let left = target - sum, left_avg = left / (length-1-i);
        let left_avg_h = Math.ceil(left_avg), left_avg_l = Math.floor(left_avg);
        let distance1 = Math.abs( sum + (length-1-i)*left_avg_h - target );
        let distance2 = Math.abs( sum + (length-1-i)*left_avg_l - target );
        if( left_avg >= arr[i+1] ){
            if( distance1 < distance_diff ){ 
                distance_diff = distance1;
                result = left_avg_h;
            }
            if( distance2 < distance_diff ){
                distance_diff = distance2;
                result = left_avg_l;
            }
            console.log(sum + ", " +left + ", " +result + ", " + distance_diff);
        }
    }

    console.log(arr);

    return result;
};