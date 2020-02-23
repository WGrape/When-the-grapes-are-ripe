/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {

    let length = A.length, frequency = {};
    for( let word of A ){

        for(let c of word){
            
            if(!frequency[c]){
                frequency[c] = 0;
            }
            ++frequency[c];
        }
    }

    let chars = Object.getOwnPropertyNames(frequency);

};