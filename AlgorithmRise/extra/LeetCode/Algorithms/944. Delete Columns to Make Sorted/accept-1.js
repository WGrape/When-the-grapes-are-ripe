/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    
    let flag = [];
    let stack = [];
    let mode = A[0].length, deprecated = 0; // mode 表示容器的数量

    A = A.join("");
    let length = A.length;

    for( let i = 0; i<=length-1; ++i ){

        let index = i%mode;
        if( !stack[index] ){
            stack[index] = [];
        }
        stack[index].push( A[i] );

        // 如果此容器废弃或者此容器的高度为1
        if(flag[ index ] || 1 == stack[index].length){
            continue;
        }
        
        let h = stack[index].length-1; // 第 index 个容器的高度
        if( stack[ index ][ h ] < stack[ index ][ h-1 ] ){
            ++deprecated;
            flag[ index ] = 1; // 标记此容器废弃
        }

        if(deprecated >= mode){
            break;
        }
    }

    return deprecated;
};