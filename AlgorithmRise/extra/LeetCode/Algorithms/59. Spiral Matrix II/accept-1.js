var visitMap = function(matrix, i, j, step, direction, n){

    if(!matrix[i]){
        matrix[i] = [];
    }
    if( !matrix[i][j] ){
        matrix[i][j] = step;
    }
    console.log("("+ i +", " + j +")");

    // 右0, 下1, 左2, 上3
    switch( direction ){

        case 0:
            if(j>=n-1 || (matrix[i] && matrix[i][j+1])){
                direction = 1;
                ++i;
            }else{
                ++j;
            }
            break;

        case 1:
            if(i>=n-1 || (matrix[i+1] && matrix[i+1][j])){
                direction = 2;
                --j;
            }else{
                ++i;
            }
            break;

        case 2:
            if(j<=0 || (matrix[i] && matrix[i][j-1])){
                direction = 3;
                --i;
            }else{
                --j;
            }
            break;
        
        case 3:
            if(i<=0 || (matrix[i-1] && matrix[i-1][j])){
                direction = 0;
                ++j;
            }else{
                --i;
            }
            break;
        
        default:break;
    }

    if( n*n < step ){
        return false;
    }

    ++step;
    return [matrix, i, j, step, direction];
}

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    let matrix = [];

    if(1 == n){
        return [ [1] ];
    }
    
    let res = visitMap(matrix, 0, 0, 1, 0, n);
    while( res ){
        res = visitMap( res[0], res[1], res[2], res[3], res[4], n);
    }

    return matrix;
};