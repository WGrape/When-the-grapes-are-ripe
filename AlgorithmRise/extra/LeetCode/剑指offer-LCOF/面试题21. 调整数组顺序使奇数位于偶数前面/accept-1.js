/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    
    let stack1 = [], stack2 = [];

    for(let num of nums){

        if( num%2 ){
            stack1.push(num);
        }else{
            stack2.push(num);
        }
    }

    return stack1.concat(stack2);
};