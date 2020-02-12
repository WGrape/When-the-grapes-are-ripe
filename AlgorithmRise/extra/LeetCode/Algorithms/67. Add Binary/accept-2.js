/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  
    let pos_a = a.length-1, pos_b = b.length-1, carry = 0, stack=[];
    for( ; pos_a >= 0 || pos_b >=0 ; --pos_a, --pos_b ){
        
        let _a = parseInt(a[pos_a]), _b = parseInt(b[pos_b]);
        if(pos_a >= 0 && pos_b >=0){
            carry = carry + _a + _b;
        }else if(pos_a < 0){
            carry = carry + 0 + _b;
        }else{
            carry = carry + _a + 0;
        }
  
        if( carry >= 2 ){
        
            stack.push(carry - 2);
            carry = 1;
        }else{
            
            stack.push(carry);
            carry = 0;
        }
    }
    
    if( carry > 0 ){
        stack.push(carry); 
    }
    
    return stack.reverse().join('');
    
};