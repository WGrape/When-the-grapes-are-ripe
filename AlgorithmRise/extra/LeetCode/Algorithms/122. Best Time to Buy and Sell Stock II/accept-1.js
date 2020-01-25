/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0, pivot = 0, length = prices.length;
    for(let i=1; i<=length-1; ++i){

        if(prices[i] < prices[i-1] ){
    
            profit += ( prices[i-1] - prices[pivot] );
            pivot = i;
        }
        
        if(length-1 === i){

            profit += ( prices[i] - prices[pivot] );
            break;
        }
    }
    
    return profit;
};