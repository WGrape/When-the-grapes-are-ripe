class Solution {

/**
 * @param Float $x
 * @param Integer $n
 * @return Float
 */
function myPow($x, $n) {
    if(0 == $n){
        return 1;
    }
    if(0 == $x){
        return 0;
    }
    for($i=1; $i<=$n; ++$i){
        $x = bcmul($x, $x);
    }   
    if($n<0){
        return 1/$x;
    }
    return $x;
}
}