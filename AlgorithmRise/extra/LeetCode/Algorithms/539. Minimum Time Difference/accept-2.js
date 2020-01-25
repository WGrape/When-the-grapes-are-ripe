/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    
    let set = [], minimum = 999999;
    
    let mitutePoints = timePoints.map((time)=>{
        
        let pieces = time.split(":");
        let hours = pieces[0], minutes = pieces[1];
        
        let w = hours*60 + minutes*1; // 未强转化, 使用相乘来实现自动转化
        
        if(!set[w]){
         
            set[w] = 1;
        }else{
            
            minimum = 0;
        }
        
        return w;
    });
    
    mitutePoints = mitutePoints.sort((a, b) => a-b);
        
    
    if(0 === minimum){
           
        return minimum;   
    }
    
    let length = mitutePoints.length; // minimum = 23*60+59
    for(let i=0; i<=length-1; ++i){
        
        let left = mitutePoints[i], right = (i+1>=length) ? mitutePoints[0] : mitutePoints[i+1];
        
        let distance = Math.abs(right - left) ;
        
        if(distance > 1439/2){
            
            distance = 1440 - distance;
        }
        
        if( distance < minimum ){
           minimum = distance;
        }
        
        if(1 === minimum){
           
           break;   
        }
    }
    
    return minimum;
};