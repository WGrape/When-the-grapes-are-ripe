/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    if(0 == dividend+divisor || 0 == dividend-divisor ){
        return 0;
    }

    let negative = false;
    if(divisor<0){
        negative = true;
        divisor *= (-1);
    }

    let count = 0;
    while(dividend >= divisor){
        dividend -= divisor;
        ++count;
    }

    return negative ? count*(-1) : count;
};