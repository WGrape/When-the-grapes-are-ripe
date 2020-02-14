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
        }else{

            let j = 0;
            while(j<=stack.length-1){
                if( stack[j] > nums2[i] ){
                    break;
                }
                ++j;
            }
            if( j<=stack.length-1 ){

                // 注意这里, map赋值要先于stack.unshift, 否则stack长度下标就改变, 导致出错
                map[ nums2[i] ] = stack[j];
                stack.unshift( stack[j] );
            }else{
                stack.unshift( -1 );
                map[ nums2[i] ] = -1;
            }
        }
    }

    //console.log(stack);
    //console.log(map);

    let result = [];
    for(let i =0; i<=len-1; ++i){
        result.push( map[nums1[i]] );
    }

    return result;
};