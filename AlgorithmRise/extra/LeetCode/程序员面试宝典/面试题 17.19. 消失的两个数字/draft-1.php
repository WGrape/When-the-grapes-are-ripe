class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function missingTwo($nums) {

        asort($nums);
        print_r($nums);
        $contrast = range(1, $nums[ count($nums)-1 ]);
        return array_diff($nums, $contrast);
    }
}
