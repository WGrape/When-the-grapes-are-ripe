/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function(cont) {

    let length = cont.length;
    if(length<2){
        return [cont[0], 1];
    }

    // 用栈数据结构处理方式会简单些
    let fraction = [1, cont[length-1]];
    for( let i = length-2; i>=0; --i ){
        
        // console.log("Before:" + fraction);

        // a+b操作: fraction[0]分子, fraction[1]分母
        fraction[0] = fraction[0] + fraction[1]*cont[i];

        // 1/(a+b)操作: 交换分子和分母
        if(i){
            let temp = fraction[0];
            fraction[0] = fraction[1];
            fraction[1] = temp;
        }
        
        // console.log("After:" + fraction);
    }

    return fraction;
};