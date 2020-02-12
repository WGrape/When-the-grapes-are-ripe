/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  
    let pos_a = a.length-1, pos_b = b.length-1, carry = 0, stack=[];
    for( ; pos_a >= 0 || pos_b >=0 ; --pos_a, --pos_b ){
        
        let _a = a[pos_a] - '0', _b = b[pos_b] - '0';
        if(pos_a >= 0 && pos_b >=0){
            carry += _a + _b;
        }else if(pos_a < 0){
            carry += _b;
        }else{
            carry += _a;
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