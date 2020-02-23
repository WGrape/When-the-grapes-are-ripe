/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    // Object.assign奇怪有时候值传递, 有时候还是引用传递, 所以这里用JSON实现值传递
    let _matrix = JSON.parse(JSON.stringify(matrix)), height = matrix.length, width = matrix[0].length;
    for(let i =0; i<=height-1; ++i){

        for(let j =0; j<=width-1; ++j){

            matrix[ j ][ height-1-i ] = _matrix[i][j];
        }
    }
};