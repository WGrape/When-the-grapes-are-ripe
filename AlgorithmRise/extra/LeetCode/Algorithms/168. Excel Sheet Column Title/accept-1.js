/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {

    let result = [], code = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    while(n>0){

        let key = (n%26)-1 >= 0 ? (n%26)-1 : 25;

        // 映射
        result.unshift(code[key]);

        // 进制转换
        --n;
        n = Math.floor(n/26);
    }

    return result.join('');
};