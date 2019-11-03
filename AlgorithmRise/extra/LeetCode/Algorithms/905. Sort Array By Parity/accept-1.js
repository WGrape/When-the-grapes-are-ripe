/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    
    var B = [], C = [];
    
    A.forEach((num)=>{
        
        if(num%2==0){
            
            B.push(num);
        }else{
            
            C.push(num);
        }
    });
    
    
    return Array.prototype.concat(B,C) ;
};