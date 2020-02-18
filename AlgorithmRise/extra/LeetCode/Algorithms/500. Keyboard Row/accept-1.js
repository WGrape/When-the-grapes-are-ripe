/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {

    let map = {

        "q" : 0,
        "w" : 0,
        "e" : 0,
        "r" : 0,
        "t" : 0,
        "y" : 0,
        "u" : 0,
        "i" : 0,
        "o" : 0,
        "p" : 0,

        "a" : 1,
        "s" : 1,
        "d" : 1,
        "f" : 1,
        "g" : 1,
        "h" : 1,
        "j" : 1,
        "k" : 1,
        "l" : 1,

         "z" : 2,
         "x" : 2,
         "c" : 2,
         "v" : 2,
         "b" : 2, 
         "n" : 2,
         "m" : 2,
    };

    let stack = [];

    for(let word of words){

        let _word = word.toLowerCase();
        let line = map[ _word[0] ], length = _word.length, res = true;
        for(let i = 1; i<=length-1; ++i){
            if( line != map[ _word[i] ] ){
                res = false;
                break;
            }
        }
        if(res){
            stack.push( word );
        }
    }

    return stack;
};