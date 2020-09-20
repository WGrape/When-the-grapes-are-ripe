/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {

    let appear = [];
    for(let c of pattern){
        appear.push( pattern.indexOf(c) );
    }

    let arr = str.split(' ');
    if(appear.length != arr.length){
        return false;
    }
    for( let i = 0; i<=arr.length-1; ++i ){

        if( appear[i] != arr.indexOf( arr[i] ) ){
            return false;
        }
    }

    return true;
};