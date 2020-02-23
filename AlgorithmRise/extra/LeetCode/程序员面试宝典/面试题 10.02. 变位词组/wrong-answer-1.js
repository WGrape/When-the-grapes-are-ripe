/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // 又是一道计算 ascii 值的题
    let stack = [];
    for( let str of strs ){
        
        let ascii = 0;
        for( let c of str ){
            ascii += c.charCodeAt();
        }
        if(!stack[ ascii ]){
            stack[ ascii ] = [];
        }
        stack[ ascii ].push( str );
    }
    stack = stack.filter(Boolean);

    return stack;
};