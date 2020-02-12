var cache = [];

// 缓存下计算过的数据
var compute = function(arr, from, to){
    let result = 0;

    if( cache[ from+"-"+to ] ){
        return cache[ from+"-"+to ];
    }

    for( let i = from; i<=to; ++i ){
        result ^= arr[i];
    }

    cache[ from+"-"+to ] = result;

    return result;
};

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {

    cache = [];
    let stack = [];
    for( let query of queries ){
        stack.push( compute(arr, query[0], query[1]) );
    }

    return stack;
};