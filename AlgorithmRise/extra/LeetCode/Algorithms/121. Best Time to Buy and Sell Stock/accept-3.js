/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let length = prices.length, min = prices[0], max = 0;
    for( let i = 1; i<=length-1; ++i ){

        if( prices[i] > min ){
            let profit = prices[i] - min;
            max = profit > max ? profit : max;
        }else{
            min = prices[i];
        }
    }

    return max;
};