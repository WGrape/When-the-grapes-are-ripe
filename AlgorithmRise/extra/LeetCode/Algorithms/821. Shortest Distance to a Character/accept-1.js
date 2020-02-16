/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    
    let distance = [], stack = [], len = S.length;
    for( let i = 0; i<=len-1; ++i ){

        if(C == S[i]){
            distance.push(i); // 升序排列
        }
    }

    let index = 0, end = distance.length-1; // 记录distance的下标
    for( let i = 0; i<=len-1; ++i ){

        if( index+1 <= end ){

            if( Math.abs(i-distance[index+1]) < Math.abs(i-distance[index]) ){
                ++index;
            }
        }
        stack.push( Math.abs(i-distance[index]) );
    }

    return stack;
};