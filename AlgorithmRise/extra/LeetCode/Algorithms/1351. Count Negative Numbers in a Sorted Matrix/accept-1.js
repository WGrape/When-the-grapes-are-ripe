/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    
    // 将二维数组挤压为一维数组, 然后计算
    let _grid = [].concat.apply([],grid), length = _grid.length, count = 0;
    for( let i = 0; i<=length-1; ++i ){
        
        if( _grid[i] < 0 ){
            ++count;
        }
    }

    return count;
};