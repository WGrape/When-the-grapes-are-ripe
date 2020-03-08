var becomeRotted = function(grid, i, j){
    
    // 腐烂上一个橘子
    if( grid[i-1] && grid[i-1][j] ){
        grid[i-1][j] = 2;
    }

    // 腐烂下一个橘子
    if( grid[i+1] && grid[i+1][j] ){
        grid[i+1][j] = 2;
    }

    // 腐烂左一个橘子
    if( grid[i] && grid[i][j-1] ){
        grid[i][j-1] = 2;
    }

    // 腐烂右一个橘子
    if( grid[i] && grid[i][j+1] ){
        grid[i][j+1] = 2;
    }

    return grid;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

    let width = grid[0].length, height = grid.length, min = 0;
    for( let i = 0; i<=height-1; ++i ){
        for( let j = 0; j<=width-1; ++j){

            if(1 == grid[i][j]){
                ++min;
                grid = becomeRotted(grid, i, j);
            }
        }
    }

    return min;
};