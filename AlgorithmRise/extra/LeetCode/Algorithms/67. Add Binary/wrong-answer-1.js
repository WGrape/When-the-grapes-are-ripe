// 二进制转换成数字
var convert = function(str){

    let length = str.length, r = 0;
    for(let i =0; i<=length-1; ++i){
        r = (r << 1) + parseInt(str[i]);
    }

    return r;
}

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    return parseInt( convert(a) + convert(b) ).toString(2);
};