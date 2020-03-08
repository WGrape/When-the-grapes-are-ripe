var becomeRotted = function(grid, i, j){
    
    let rotted = [];

    // 腐烂上一个橘子
    if( grid[i-1] && 1 == grid[i-1][j] ){
        grid[i-1][j] = 2;
        rotted.push([i-1,j]);
    }

    // 腐烂下一个橘子
    if( grid[i+1] && 1 == grid[i+1][j] ){
        grid[i+1][j] = 2;
        rotted.push([i+1,j]);
    }

    // 腐烂左一个橘子
    if( grid[i] && 1 == grid[i][j-1] ){
        grid[i][j-1] = 2;
        rotted.push([i,j-1]);
    }

    // 腐烂右一个橘子
    if( grid[i] && 1 == grid[i][j+1] ){
        grid[i][j+1] = 2;
        rotted.push([i,j+1]);
    }

    return {"grid":grid, "rotted":rotted};
}

var computeRottedCount = function(grid){

}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

    let width = grid[0].length, height = grid.length, min = 0, rotted = [], orange_count = 0, rotted_count = 0;

    for( let i = 0; i<=height-1; ++i ){

        for( let j = 0; j<=width-1; ++j ){

            if(1 == grid[i][j]){
                ++orange_count;
            }

            if(2 == grid[i][j]){
                ++rotted_count;
                ++orange_count;
                rotted.push([i, j]);
            }
        }
    }

    // 如果没有橘子, 则无需任何时间, 已经全部腐烂了(前提是无橘子)
    if(0 == orange_count){
        return 0;
    }

    // 如果没有腐烂的橘子, 则无法腐烂全部的橘子(前提是有橘子)
    if(0 == rotted_count){
        return -1;
    }

    while(orange_count != rotted.length){
        ++min;
        let stack = [];
        for( let item of rotted ){
            let res = becomeRotted(grid, item[0], item[1]);
            grid = res['grid'];
            stack = stack.concat(res['rotted']);
        }
        if(!stack.length){
            return -1;
        }
        rotted = rotted.concat(stack);
    }

    return min;
};