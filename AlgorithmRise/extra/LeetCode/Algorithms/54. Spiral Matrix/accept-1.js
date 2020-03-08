/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    if(!matrix.length || !matrix[0].length){
        return [];
    }

    let width = matrix[0].length, height = matrix.length, steps = width*height;

    let i = 0, j = -1, result = [], hash = {};
    let direction = 0; // 给一个初始方向
    while(steps){
        switch( direction ){

            case 0:
                if(j+1<=width-1 && !hash[ i+'-'+(j+1) ]){
                    ++j;
                }else{
                    direction = 1;
                    continue;
                }
                break;

            case 1:
                if(i+1<=height-1 && !hash[ (i+1)+'-'+j ]){
                    ++i;
                }else{
                    direction = 2;
                    continue;
                }
                break;

            case 2:
                if(j-1>=0 && !hash[ i+'-'+(j-1) ]){
                    --j;
                }else{
                    direction = 3;
                    continue;
                }
                break;

            case 3:
                if(i-1>=0 && !hash[ (i-1)+'-'+j ]){
                    --i;
                }else{
                    direction = 0;
                    continue;
                }
                break;

            default:break;
        }

        hash[ i+'-'+j ] = 1;
        result.push(matrix[i][j]);
        --steps;
    }

    return result;
};