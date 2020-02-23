/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let length = nums.length, hash = {};
    for( let i = 0; i<=length-1; ++i ){
        if( !hash[nums[i]] ){
            hash[nums[i]] = 0;
        }
        ++hash[nums[i]];
    }

    let stack = [], props = Object.getOwnPropertyNames(hash);
    for( let prop of props){
        stack.push({ "value" : prop, "count" : hash[prop] });
    }

    stack.sort((a,b)=>{
        return b.count - a.count;
    });

    let result = [];
    for( let obj of stack ){
        result.push(obj.value);
        if( k == result.length ){
            return result;
        }
    }
};