var compute = function(arr, from, to){
    let result = 0;

    for( let i = from; i<=to; ++i ){
        result ^= arr[i];
    }

    return result;
};


/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {

    let stack = [];
    for( let query of queries ){
        stack.push( compute(arr, query[0], query[1]) );
    }

    return stack;
};