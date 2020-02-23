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

    let sum = 0, index = 0, sum_near = 0, distance_diff = 999999;
    for( let i = 0; i<=length-1; ++i ){

        if(sum + arr[i] > target){
            break;
        }
        sum += arr[i];

        let distance = Math.abs( sum + ((length-1-i)*arr[i]) - target );
        
        // console.log((length-1-i)+"个"+arr[i]);
        // console.log("distance:"+distance);

        if( distance < distance_diff || (distance_diff == distance && arr[index] == arr[i]) ){

            console.log("i:"+i);
            console.log("distance:"+distance);
            console.log("distance_diff:"+distance_diff);

            sum_near = sum;
            distance_diff = distance;
            index = i;
        }
    }

    // console.log("arr:"+arr);
    // console.log("index:"+index);
    // console.log("sum_near:"+sum_near);

    let left = target - sum_near, left_avg = left / (length-1-index);
    let left_avg_h = Math.ceil(left_avg), left_avg_l = Math.floor(left_avg);
    let distance1 = Math.abs( sum_near + (length-1-index)*left_avg_h - target );
    let distance2 = Math.abs( sum_near + (length-1-index)*left_avg_l - target );
    if( distance1 < distance_diff ){
        return left_avg_h;
    }
    if( distance2 < distance_diff ){
        return left_avg_l;
    }

    return arr[index];
};