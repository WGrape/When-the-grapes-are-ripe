/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0, pivot = 0, end = prices.length-1;
    for(let i=1; i<=end; ++i){

        let deadline = i-1;
        if(prices[i] < prices[deadline] ){
    
            profit += ( prices[deadline] - prices[pivot] );
            pivot = i;
        }
        
        if(end === i){

            profit += ( prices[i] - prices[pivot] );
            return profit;
        }
    }
    
    return profit;
};

