/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  
    n = n + '';
    
    let length = n.length, sum = 0, product = 1;
    for( let i=0; i<=length-1; ++i){
    
        sum += parseInt(n[i]);
        product *= parseInt(n[i]);
    }
    
    return product - sum;
};