/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // 又是一道计算 ascii 值的题
    let stack = [], extra = [], flag = {};
    for( let str of strs ){
        
        let ascii = 0;
        for( let c of str ){
            ascii += c.charCodeAt();
        }
        if(!stack[ ascii ]){
            stack[ ascii ] = [];
        }

        let res = true;
        for( let c of str ){
            if( !flag[ ascii + '-' + c ] ){
                flag[ ascii + '-' + c ] = 1;
                res = true;
            }
        }

        stack[ ascii ].push( str );
        console.log(ascii);
    }
    //stack = stack.filter(Boolean);
    console.log(stack);

    return stack;
};