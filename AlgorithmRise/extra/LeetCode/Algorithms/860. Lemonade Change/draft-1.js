/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {

    let stock = 0;
    for(let bill of bills){
        if(5 == bill){
            stock += 5;
        }else{

            if(stock<0){
                return false;
            }
            stock -= ( bill-5 );
            stock += bill;
        }
    }

    return true;
};