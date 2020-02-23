/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    
    let count = 0;
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    for( let i = 0; i<=g.length-1; ++i ){

        for( let j = 0; j<=s.length-1; ++j ){
            if( s[j] >= g[i] ){
                ++count;
                s.splice(j,1);
                break;
            }
        }
    }

    return count;
};

// 注意要提前将g和s按升序排列