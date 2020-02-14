/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

    let stack = [], length = nums2.length, len = nums1.length, map = {};

    for( let i =length-1; i>=0; --i ){
        if(length-1 === i){

            stack.unshift(-1);
            map[ nums2[i] ] = -1;
            continue;
        }

        if( nums2[i+1] > nums2[i] ){

            stack.unshift( nums2[i+1] );
            map[ nums2[i] ] = nums2[i+1];
        }else if( stack[0] > nums2[i] ){

            stack.unshift( stack[ 0 ] );
            map[ nums2[i] ] = stack[ 0 ];
        }else{

            stack.unshift( -1 );
            map[ nums2[i] ] = -1;
        }
    }

    console.log(stack);

    let result = [];
    for(let i =0; i<=len-1; ++i){
        
        result.push( map[nums1[i]] );
    }

    return result;
};