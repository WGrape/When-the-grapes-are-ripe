var arrInsert = function (arr, index, item) {
    arr.splice(index, 0, item);
    return arr;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let dp = [], index = 0;
    for( let num of nums ){

        if(!index){
            dp[index++] = [ [num] ];
            continue;
        }

        let stack =[];
        for( let sequence of dp[ index-1 ] ){
            let length = sequence.length;
            for( let i = 0; i<=length; ++i ){
                let _sequence = Object.assign([], sequence); // 否则会出现引用传递情况
                stack.push( arrInsert(_sequence, i, num) );
            }
        }
        dp[index++] = stack;
    }

    return dp[index-1];
};