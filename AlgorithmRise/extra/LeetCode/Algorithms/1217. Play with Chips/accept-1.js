/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {

    let even = odd = 0;
    for( let chip of chips ){
        if( chip %2 ){
            ++odd;
        }else{
            ++even;
        }
    }

    return Math.min( even, odd );
};