/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    
    let num = 0;
    for( let c of s ){
        
        num = num*26 + (c.charCodeAt()-'A'.charCodeAt()+1);
    }

    return num;
};