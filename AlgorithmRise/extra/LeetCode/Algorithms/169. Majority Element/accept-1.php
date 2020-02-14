class Solution {

/**
 * @param Integer[] $nums
 * @return Integer
 */
function majorityElement($nums) {
    
    $map = [];
    
    foreach( $nums as $num ){
        
        !isset($map[ $num ]) ? $map[ $num ]=1 : ++$map[ $num ];
    }
    
    arsort($map);
    
    // print_r($map);
    
    return array_keys($map)[0];
}
}