let min = -1;

var tryMatch = function(coins, index, sum, amount, count){

    for( let i = index; i>=0; --i ){

        let res = 0;
        if( sum + coins[i] < amount ){
            res = tryMatch(coins, i, sum+coins[i], amount, count+1);
        }else if( amount == sum + coins[i] ){
            res = count + 1;
        }
        if(res > 0){
            if(-1 == min){
                min = res;
            }
            min = Math.min(res, min);
            sum = 0;
            count = 0;
            
        }
    }
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    min = -1;
    if(!amount){
        return 0;
    }
    coins.sort((a,b)=>a-b);
    console.log(coins);

    let index;
    for(index = coins.length-1; index>=0 && coins[index]>amount; --index){
    }

    //tryMatch(coins, index, 0, amount, 0);

    return min;
};