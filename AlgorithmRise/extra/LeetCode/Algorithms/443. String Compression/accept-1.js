/**
 * @param {character[]} chars
 * @return {number}
 */


// 好坑，通过率比中等难度的题还低，不但不能自己定义，而且原数组还不能重置，必须一点一点修改原数组才可以
var compress = function(chars) {
    
    var offset = index = 0, len = chars.length;
    
    while( offset <= len-1 ){
        
        chars[index] = chars[offset];
        
        var j=1, count=1;
        while(chars[offset+j] == chars[offset]){
            
            ++j; ++count;
        }
        
        if(count>1){

            ( (new Number(count)).toString() ).split('').forEach(function(char){

                chars[++index] = char;
            });
          
        }
            
        ++index;
        
        offset+=count;
    }
    
    return index;
};


