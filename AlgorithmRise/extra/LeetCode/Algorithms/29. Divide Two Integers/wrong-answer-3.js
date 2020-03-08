/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    if(!dividend && !divisor){
        return 0;
    }

    let negative = false;
    if(divisor<0 && dividend<0){
        negative = false;
        divisor *= (-1);
        dividend *= (-1);
    }else if(divisor<0){
        negative = true;
        divisor *= (-1);
    }else if(dividend<0){
        negative = true;
        dividend *= (-1);
    }

    let count = 0;
    while(dividend >= divisor){
        dividend -= divisor;
        ++count;
    }

    return negative ? count*(-1) : count;
};