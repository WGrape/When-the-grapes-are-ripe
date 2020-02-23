class Solution {

/**
 * @param Integer $shorter
 * @param Integer $longer
 * @param Integer $k
 * @return Integer[]
 */
function divingBoard($shorter, $longer, $k) {

    $start = $k;
    $count = 2*$k-1;
    $stack = range($start, $start+$count-1);

    return $stack;
}
}