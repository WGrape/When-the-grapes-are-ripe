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
        
        let left = 1, right = n, mid = (left + right)>>1, pre_mid = -1;

        // 二分查找
        while( left <= right ){
            
            if(isBadVersion(mid)){
                right = mid;
            }else{
                left = mid;
            }
            pre_mid = mid;
            mid = Math.floor((left + right)/2);
            if(pre_mid == mid){
                break;
            }
        }

        if(isBadVersion(mid)){
            return mid;
        }
        return mid+1;
    };
};