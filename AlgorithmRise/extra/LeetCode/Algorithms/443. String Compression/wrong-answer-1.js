/**
 * @param {character[]} chars
 * @return {number}
 */

 // 这道题有问题 ！！！
 // 明明是对的

 // 其实这题要求必须直接修改 chars

 // 好坑，通过率比中等难度的题还低，不但不能自己定义，而且原数组还不能重置，必须一点一点修改原数组才可以
var compress = function(chars) {
  
    var arr=[], arr2=[];
    
    chars.forEach((char)=>{
        
        if( isNaN( arr[char] ) ){
            
            arr[char] = 1;
        }else{
            
            ++arr[ char ];
        }
    });
    
    for(var key in arr){
        
        if(key != "length"){
            
            arr2.push(key);
            if( arr[key] > 1 ){
                
                ( (new Number(arr[key])).toString() ).split('').forEach(function(char){
                    
                    arr2.push(char);
                });
            }
        }
    }
    
    return arr2;
};