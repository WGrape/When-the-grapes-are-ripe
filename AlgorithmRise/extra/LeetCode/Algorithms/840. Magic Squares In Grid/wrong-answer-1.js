var compute = function(grid, i,j){

    // 左至右方向的和
    let sum = grid[i][j] + grid[i][j+1] + grid[i][j+2];

    // 上至下方向的和
    if( sum != grid[i][j+2] + grid[i+1][j+2] + grid[i+2][j+2] ){
        return false;
    }

    // 右至左方向的和
    if( sum != grid[i+2][j+2] + grid[i+2][j+1] + grid[i+2][j]){
        return false;
    }

    // 下至上方向的和
    if( sum != grid[i+2][j] + grid[i+1][j] + grid[i][j]){
        return false;
    }

    // 左斜对角线和
    if( sum != grid[i][j] + grid[i+1][j+1] + grid[i+2][j+2]){
        return false;
    }

    // 右斜对角线和
    if( sum != grid[i+2][j] + grid[i+1][j+1] + grid[i][j+2]){
        return false;
    }

    // 垂线方向的和
    if( sum != grid[i][j+1] + grid[i+1][j+1] + grid[i+2][j+1]){
        return false;
    }

    // 水平线方向的和
    if( sum != grid[i+1][j] + grid[i+1][j+1] + grid[i+1][j+2]){
        return false;
    }

    return true;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {

    let width = grid[0].length, height = grid.length, count = 0;

    for( let i = 0; i<=height-3; ++i ){

        for( let j = 0; j<=width-3; ++j ){

            if(compute(grid, i, j)){
                ++count;
            }
        }
    }

    return count;
};
