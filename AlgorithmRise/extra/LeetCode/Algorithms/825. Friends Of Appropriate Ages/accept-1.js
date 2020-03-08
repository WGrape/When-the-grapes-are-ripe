var judge = function(a, b){

    if( b <= 0.5*a+7){
        return false;
    }
    if( b > a ){
        return false;
    }   
    if( b > 100 && a < 100 ){
        return false;
    }

    return true;
}

/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {

    ages.sort((a,b)=>b-a);

    let length = ages.length, count = 0;
    for( let i = 0; i<=length-2; ++i ){

        for( let j = i+1; j<=length-1; ++j ){

            // 这里是重点处理, 因为A向B和B向A的申请不属于同一个
            if( judge(ages[i], ages[j]) ){
                ++count;
            }
            if( judge(ages[j], ages[i]) ){
                ++count;
            }
        }
    }

    return count;
};