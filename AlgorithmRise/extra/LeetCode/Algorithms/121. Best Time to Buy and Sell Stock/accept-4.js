/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let length = prices.length, min = prices[0], max = 0;
    for( let i = 1; i<=length-1; ++i ){

        max = Math.max(prices[i] - min, max);
        min = Math.min(prices[i], min);
    }

    return max;
};