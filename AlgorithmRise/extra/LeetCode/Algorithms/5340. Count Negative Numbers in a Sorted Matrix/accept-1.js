/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    
    let _grid = [].concat.apply([],grid), length = _grid.length, count = 0;
    for( let i = 0; i<=length-1; ++i ){
        
        if( _grid[i] < 0 ){
            ++count;
        }
    }

    return count;
};