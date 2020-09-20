class Solution {

    /**
    * @param String $date1
    * @param String $date2
    * @return Integer
    */
    function daysBetweenDates($date1, $date2) {

        $timestamp1 = strtotime($date1);
        $timestamp2 = strtotime($date2);
        return abs($timestamp1-$timestamp2)/86400;
    }
}