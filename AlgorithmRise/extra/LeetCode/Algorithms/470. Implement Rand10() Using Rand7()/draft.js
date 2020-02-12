/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
    
    return rand7() + ( Date.now() % 4 );
};

// 我以为只要能生成就行，原来人家要的很严格 : 必须分布均匀


// 为什么会有预期结果这种东西，你随机数不是跟生成机制有关系吗
// 对的随机数，随机数，你预期结果是是几个意思。。哈哈
//  他就是观察你的分布均匀不均匀啊..
// 均匀不均匀，不是应该多次运算，给出每种结果的概率么？但是它给的是一个确切的随机数字
// 对啊 你不用管那个 他反正最后评价你不看你跟他是不是完全一样 你提交的时候她只看你的概率分布
// 嗯嗯，所以说，预期结果，应该给我看到概率分布，而不应该是一个随机数。这样会更合理一些

// https://blog.csdn.net/sd4567855/article/details/87871049
// 正态分布可以生成均匀分布吗? https://www.zhihu.com/question/25111423