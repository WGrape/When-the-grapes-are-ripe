/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    
    // 非原创 ！！！
    // 这个解法是我看到的评论 ！！！
    // 这个解法不是自己想的
    let temp=n^(n>>1); 
    return (temp&(temp+1))==0;
};

// PS: 这个解法确实很牛逼的位运算