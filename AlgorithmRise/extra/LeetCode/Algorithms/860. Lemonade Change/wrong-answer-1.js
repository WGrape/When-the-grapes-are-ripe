/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {

    let length = bills.length, stock = [];
    for( let i = 0; i<=length-1; ++i ){

        let bill = bills[i];
        if(5 == bill){
            stock.push(stock);
        }else if(10 == bill){
            if(!stock.length || stock[ stock.length-1 ] > 5){
                return false;
            }
            stock.pop();
            stock.push(10);
        }else{

            if(stock.length<2 || stock[0] + stock[ stock.length-1 ] < 15){
                return false;
            }
            stock.unshift();
            stock.pop();
            stock.push(20);
        }
        stock.sort((a,b) => a-b);
    }

    return true;
};

// 这是一种错误思路