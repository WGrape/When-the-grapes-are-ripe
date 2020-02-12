/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
    
    let a = rand7(), b = rand7();
    
    // a = [1,2,3,4,5,6]
    while(a>6){
        a = rand7();
    }

    // b = [1,2,3,4,5]
    while(b>5){
        b = rand7();
    }

    if( a%2 ){
        return b+5; // [6,7,8,9,10]
    }else{
        return b; // [1,2,3,4,5]
    }
};

// 其实这题是思想就是让你通过 rand7() 函数，自己组合构造出 1-10均匀分布的算法
// 意思就是每次出现 1-10 的概率都相同

// 解题思路来自于 https://leetcode.com/problems/implement-rand10-using-rand7/discuss/373385/Javascript-solution-straightforward
