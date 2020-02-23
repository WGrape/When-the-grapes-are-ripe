/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    
    while(b){
        
        let plus = a^b; // 计算个位数之和
        b = (a&b) << 1; // 计算进位
        a = plus;
    }

    return a;
};