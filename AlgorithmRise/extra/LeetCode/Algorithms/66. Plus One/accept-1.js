/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let length = digits.length;
    let carry = digits[length-1] + 1;

    if( carry < 10 ){
        digits[length-1] = carry;
        return digits;
    }

    let stack = [];
    carry = 1;
    for( let i = length-1; i>=0; --i ){

        carry += digits[i];
        if(carry > 9){
            stack.unshift( carry-10 );
            carry = 1;
        }else{
            stack.unshift( carry );
            carry = 0;
        }
    }

    if(carry){
        stack.unshift( carry );
    }

    return stack;
};