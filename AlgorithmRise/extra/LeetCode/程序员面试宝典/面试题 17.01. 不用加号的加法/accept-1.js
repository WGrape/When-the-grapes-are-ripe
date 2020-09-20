/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {

    let result = 0, carry = 0, sum = 0;
    while(b){

        sum = a^b;
        carry = a&b;
        carry = carry<<1;

        a = sum;
        b = carry;
    }

    return a;
};