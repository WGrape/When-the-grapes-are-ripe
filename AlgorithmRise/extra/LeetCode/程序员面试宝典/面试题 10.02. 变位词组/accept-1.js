String.prototype.sortSelf = function(str){
    let arr = str.split("");
    arr.sort((a,b)=>{
        return b.charCodeAt() - a.charCodeAt();
    });
    return arr.join("");
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let hash = {};
    for( let str of strs ){
        
        let _str = str.sortSelf(str);
        if( !hash[ _str ] ){
            hash[ _str ] = [];
        }
        hash[ _str ].push( str );
    }
    return Object.values(hash);
};