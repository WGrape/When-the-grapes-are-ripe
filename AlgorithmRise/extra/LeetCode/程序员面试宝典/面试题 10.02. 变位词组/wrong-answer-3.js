String.prototype.sortSelf = function(str){
    let arr = str.split("");
    arr.sort((a,b)=>{
        return b.charCodeAt() - a.charCodeAt();
    });
    return arr.join("");
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // 又是一道计算 ascii 值的题
    let stack = {};
    for( let str of strs ){
        
        let _str = str.sortSelf(str);
        let ascii_sum = ascii_diff = 0;
        for( let c of _str ){
            let ascii = c.charCodeAt();
            ascii_sum += ascii;
            ascii_diff = Math.abs(ascii) - Math.abs(ascii_diff);
        }
        ascii_diff = Math.abs(ascii_diff);
        let prop = ascii_sum + "-" + ascii_diff;
        if(!stack[ prop ]){
            stack[ prop ] = [];
        }
        stack[ prop ].push( str );
    }
    return Object.values(stack);
};