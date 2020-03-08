Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

var pickChar = function(arr, i, pre, operator){
    
    let length = arr.length;
    if(1 == operator){
        
        while(i<=length-1){

            if( arr[i] > pre ){
                return [i, arr[i]];
            }
            ++i;
        }
    }else{
        
        while(i>=0){

            if( arr[i] < pre ){
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
    
    let stack = [], result = [];
    let arr = s.split('');

    let index, pre;
    while(arr.length){
          
        
        // 步骤1-2
        index = -1, pre = Number.NEGATIVE_INFINITY;
        while(index<=arr.length-1){
            
            let res = pickChar(arr, index+1, pre, 1);
            if(false == res){
                break;
            }
            index = res[0];
            pre = res[1];
            result.push(pre);
            arr.remove(index);
        }
        
        // 步骤4-5
        index = -1, pre = Number.NEGATIVE_INFINITY;
        while(index<=arr.length-1){
            
            let res = pickChar(arr, index+1, pre, 2);
            if(false == res){
                break;
            }
            index = res[0];
            pre = res[1];
            result.push(pre);
            arr.remove(index);
        }
    }
    
    return result.join('');
};