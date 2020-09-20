/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let left = 1, right = n, mid = (left + right)>>1;

        // 二分查找
        while( left <= right ){
            
            if(isBadVersion(mid)){
                right = mid;
            }else{
                left = mid;
            }
            mid = Math.floor((left + right)/2);

            // left等于mid, left+1等于right
            if(right == left + 1){
                if(isBadVersion(mid)){
                    break;
                }else{
                    ++mid;
                    break;
                }
            }

            // left = right = mid
            if(left == right && right == mid){
                break;
            }
        }

        return mid;
    };
};