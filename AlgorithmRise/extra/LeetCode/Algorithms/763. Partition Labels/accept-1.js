/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {

    //  记录每一个字符每一次一次出现的位置
    let appear = {}, index = 0;
    for( let s of S ){
        if(!appear[s]){
            appear[s] = [];
        }
        appear[s].push(index);
        ++index;
    }

    let result = [];
    let start = end = 0;
    let props = Object.getOwnPropertyNames(appear);
    for( let prop of props ){
        let indices = appear[ prop ];
        if( end < indices[0] ){
            result.push( (end - start) + 1 );
            start = indices[0];
            end = indices[ indices.length -1 ];
        }else{
            end = Math.max(end, indices[ indices.length -1 ]);
        }
    }
    if(0 < (end - start) + 1){
        result.push( (end - start) + 1 );
    }

    return result;
};