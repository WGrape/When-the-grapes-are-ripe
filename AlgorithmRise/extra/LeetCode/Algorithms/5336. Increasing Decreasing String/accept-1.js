var pickChar = function(hash, arr, i, pre, operator){
    
    let length = arr.length;
    if(1 == operator){
        
        while(i<=length-1){

            if( arr[i] > pre && !hash[i] ){
                return [i, arr[i]];
            }
            ++i;
        }
    }else{
        
        while(i>=0){

            if( arr[i] < pre && !hash[i] ){
                return [i, arr[i]];
            }
            --i;
        }
    }
    
    return false;
}

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    
    let hash = [], result = [];
    let arr = s.split('');
    arr.sort((a,b) => a.charCodeAt()-b.charCodeAt());

    let index, pre, count = arr.length;
    while(count){
          
        // 步骤1-2
        index = -1, pre = '@';
        while(index<=arr.length-1){
            
            let res = pickChar(hash, arr, index+1, pre, 1);
            if(false == res){
                break;
            }
            index = res[0];
            pre = res[1];
            result.push(pre);
            hash[index] = 1;
            --count;
        }
        
        // 步骤4-5
        index = arr.length, pre = '{';
        while(index>=0){
            
            let res = pickChar(hash, arr, index-1, pre, 2);
            if(false == res){
                break;
            }
            index = res[0];
            pre = res[1];
            result.push(pre);
            hash[index] = 1;
            --count;
        }
    }
    
    return result.join('');
};