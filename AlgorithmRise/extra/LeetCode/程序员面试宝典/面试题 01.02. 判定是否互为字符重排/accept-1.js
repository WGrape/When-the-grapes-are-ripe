/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    
    let stack = [], map1 = {}, map2 = {}, len1 = s1.length, len2 = s2.length;

    for( let i = 0; i<=len1-1; ++i ){
        if(!map1[ s1[i] ]){
            map1[ s1[i] ] = 0;
        }
        ++map1[ s1[i] ];
    }

    for( let i = 0; i<=len2-1; ++i ){
        if(!map2[ s2[i] ]){
            map2[ s2[i] ] = 0;
        }
        ++map2[ s2[i] ];
    }

    let props = Object.getOwnPropertyNames(map2);
    for( let prop of props ){

        if( !map1[prop] || map1[prop] != map2[prop] ){
            return false;
        }
    }

    return true;
};