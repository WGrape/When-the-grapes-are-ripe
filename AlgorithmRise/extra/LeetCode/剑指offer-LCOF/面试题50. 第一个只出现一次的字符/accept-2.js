/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    
    let flag = {}, map = {}, length = s.length;
    for( let i = 0; i<=length-1; ++i ){

        if(!map[ s[i] ]){
            map[ s[i] ] = 0;
        }
        ++map[ s[i] ];
        
        if(1 < map[ s[i] ]){
            delete( flag[ s[i] ] );
        }else{

            flag[ s[i] ] = 1;
        }
    }

    let props = Object.getOwnPropertyNames( flag );

    return props[0] ? props[0] : " ";
};

// 思想就是这样，别人代码快，一般是因为 使用 JS 内置更快速的 hash map 等之类的数据结构