class Solution {

/**
 * @param Integer[][] $matrix
 * @return NULL
 */
function rotate(&$matrix) {
    
    $_matrix = $matrix;
    $height = count($matrix);
    $width = count($matrix[0]);
    for($i =0; $i<=$height-1; ++$i){

        for($j =0; $j<=$width-1; ++$j){

            $matrix[ $j ][ $height-1-$i ] = $_matrix[$i][$j];
        }
    }
}
}