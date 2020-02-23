/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {

    let stack = [], hash = {};
    for(let setence of [A,B]){

        let words = setence.split(" ");
        for( let word of words ){
            if( !hash[ word ] ){
                hash[word] = 0;
            }
            ++hash[word];
        }
    }

    let props = Object.getOwnPropertyNames(hash);
    for( let prop of props ){
        if( 1 >= hash[prop] ){
            stack.push(prop);
        }
    }

    return stack;
};