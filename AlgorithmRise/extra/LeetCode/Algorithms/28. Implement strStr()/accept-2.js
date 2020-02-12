/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    // 双指针的思想: pr是负责遍历needle的指针, i是负责遍历haystack的指针
    // index是haystack中开始匹配成功的下标
    let pr = 0, index = false, length = haystack.length, len = needle.length;

    if( !len ){
        return 0;
    }

    for( let i = 0; i<=length-1; ){

        // 匹配成功
        if(haystack[i] == needle[pr]){
            
            if( false === index ){
                // 如果Index从未开始, 则记录下当前在haystack中的下标位置
                index = i;
            }
            ++i;
            ++pr;
        }
        
        // 匹配失败
        else{
            
            // pr至少目前指向的是第3个字符( 即 needle 中至少有2个字符已经是匹配成功了的 )
            if( pr > 1 ){

                i = index+1;
                index = i;
                pr = 0;
            }
            
            // pr 指向第2个元素( 即 needle 中只有第一个且只有1个字符是已经匹配成功了的 )
            // pr 当前指向的元素 = needle 中的第一个
            else if(1 === pr && haystack[i] === needle[0]){

                index = i;
                ++i;
            }
            
            // pr 指向第0个元素( 即 needle 中目前没有一个匹配成功的 ) 或者 pr 指向第1个但是 haystack[i] !== needle[0]
            else{

                ++i;
                index = false;
                pr = 0;
            }
        }

        if( pr > len-1 ){
            return index;
        }
    }

    return -1;

};