/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    
    let mitutePoints = timePoints.map((time)=>{
        
        let pieces = time.split(":");
        let hours = pieces[0], minutes = pieces[1];
        
        let w = hours*60 + minutes*1; // 未强转化, 使用相乘来实现自动转化
        
        if(w > 720){
           w = 720 - ( w - 720 );
        }
        
        return w;
    });
    
    mitutePoints = mitutePoints.sort((a, b) => a-b);
    
    // 转为以分为单位的数组, 并按升序排列, 然后直接计算最小值
    // 虽然上面以 720 为分界线, 但是这只能解决部分问题, 还是会出现 ["23:59","01:00"] 的错误答案,
    // 所以这种不是正确的解决思路 (虽然可以再加很多IF来解决问题, 但这并不是正确的解决思路)
    let minimum = 999999, length = mitutePoints.length; // minimum = 23*60+59
    for(let i=0; i<=length-1; ++i){
        
        if( mitutePoints[i+1] - mitutePoints[i] < minimum ){
           minimum = mitutePoints[i+1] - mitutePoints[i];
        }
        
        if(0 === minimum){
           
           break;   
        }
    }
    
    return minimum;
};

