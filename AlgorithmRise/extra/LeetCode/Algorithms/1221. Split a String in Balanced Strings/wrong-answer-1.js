/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    // 思想 : 双指针, 一个探索第一个L, 一个探索第一个R, 然后双指针的距离 === 右边的数量, 则+1
    let p1 = p2 = false, length = s.length, count = 0;
    for( let i = 0; i<=length-1; ){

        // p1指针探索
        if( false === p1 && "R" === s[i] ){
            p1 = i;
        }

        // p2指针探索
        else if( false === p2 && "L" === s[i] ){
            p2 = i;
        }

        // 匹配校对
        if( false !== p1 && false !== p2 ){
            let distance = Math.abs( p1 - p2 );
            i += distance;
            ++count;
            p1 = p2 = false;
        }
        else{
            ++i;
        }
    }

    return count;
};

// 理解错了题目的含义