/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);

    let g_length = g.length, s_length = s.length, count = 0;
    for( let g_i = s_i = 0; g_i<=g_length-1 && s_i<=s_length-1; ++g_i, ++s_i){

        if( g[ g_i ] == s[ s_i ] ){
            ++count;
        }
    }

    return count;
};