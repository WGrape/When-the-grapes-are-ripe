/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {

    let stack = [];
    for( let i = 0; i<=bits.length-1; ++i ){

        if(bits.length-1 == i){
            // 如果是最后一个bit
            return !stack.length;
        }

        let length = stack.length, bit = bits[i];
        if('1' == bit){
            if(length && '1' == stack[length-1]){
                stack.pop();
            }else{
                stack.push(bit);
            }
        }else{
            if(length && '1' == stack[length-1]){
                stack.pop();
            }
        }
    }
};