/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    
    let map = {}, 
    password = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    for( let word of words ){

        let chars = word.split(""), pro = "";
        for(let char of chars){
            pro += password[ char.charCodeAt() - 97 ];
        }
        map[ pro ] = 1;
    }

    return Object.getOwnPropertyNames(map).length;
};