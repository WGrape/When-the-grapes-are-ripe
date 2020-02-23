/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {

    let stack = [], hash = {};
    for( let word of A ){

        for( let c of word ){

            let res = true;
            for( let _word of A ){

                if(0 > _word.indexOf(c)){
                    res = false;
                    break;
                }
            }
            if(res){
                stack.push(c);
            }
        }
        break;
    }

    return stack;
};

// 这个思路也还是错误的, 
// 困难的问题的答案一定都简单, 如果你的代码逻辑很复杂, 很可能就是因为你的思路错误了 ！！！