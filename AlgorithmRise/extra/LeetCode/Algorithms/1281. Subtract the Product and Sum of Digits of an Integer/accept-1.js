/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  
    n = n.toString();
    
    let length = n.length, sum = 0, product = false;
    for( let i=0; i<=length-1; ++i){
        
        if(false === product){
            product = 1;
        }
        
        sum += parseInt(n[i]);
        product *= parseInt(n[i]);
    }
    
    if(false === product){
        product = 0;
    }
    
    return product - sum;
};