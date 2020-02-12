/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let stack = {}, len1 = nums1.length, len2 = nums2.length;

    if( len1 >= len2 ){

        for( let i = 0; i<=len2-1; ++i ){
            if( nums1.indexOf( nums2[i] ) > -1 ){
                stack[ nums2[i] ] = 1;
            }
        }
    }else{

        for( let i = 0; i<=len1-1; ++i ){
            if( nums2.indexOf( nums1[i] ) > -1 ){
                stack[ nums1[i] ] = 1;
            }
        }
    }

    return Object.getOwnPropertyNames(stack);

};